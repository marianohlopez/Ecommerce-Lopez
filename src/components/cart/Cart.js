import './style.css';
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc, getFirestore, updateDoc, doc} from 'firebase/firestore';
import moment from 'moment';
import Swal from 'sweetalert2';

const Cart = () => {
    const { cart, clear, removeItem, totalAmount } = useContext(CartContext);
    const navigate = useNavigate();
    const [order, setOrder] = useState({
        buyer: {
            name: '',
            phone: '',
            email: '',
            address: '',
        },
        items: cart.map((product) => ({
            title: product.title,
            category: product.category,
            color: product.color,
            line: product.line,
            model: product.model,
            year: product.year,
            quantity: product.quantity,
            price: product.price,
        })),
        total: totalAmount(),
        date: moment().format('DD/MM/YYYY, h:mm:ss a'),
    })

    const db = getFirestore();

    const createOrder = () => {
        const query = collection(db, 'orders');
        addDoc(query, order)
        .then(({id}) => {
            console.log(id);
            updateStockitem();
            Swal.fire({
                title: `Felicidades por tu compra`,
                showConfirmButton: false,
                timer: 2000
            })})
        .catch(() => alert('Tu compra no pudo ser completada'))
    };

    const updateStockitem = () => {
        cart.forEach((product) => {
            const queryUpdate = doc(db, 'items', product.id);
            updateDoc(queryUpdate, {
                stock: product.stock - product.quantity,
            })
            .then(() => {
                if (cart[cart.length - 1].id === product.id){
                    clear();
                    navigate('/');
                }
            })
            .catch(() => {
                console.log(('error al actualizar stock'));
            })
        })
    };

    const handleInputChange = (e) => {
        setOrder({
            ...order,
            buyer: {
                ...order.buyer,
                [e.target.name]: e.target.value,
            },
        });
    };

    return(
        <div className="container">
            <div className="contCart">
                {cart.length === 0 ? 
                    <>
                        <h2 className='cardTitle'>Carrito</h2>
                        <h2 className='noProduct'>Todavia no hay productos en tu carrito</h2>
                        <Link to={'/'} className="backLink">Volver a comprar</Link>
                    </> : (
                    <>
                        <h2 className='cardTitleForm'>Datos Personales</h2>
                        <form className='formCont'>
                            <div className='labelCont'>
                                <label>Nombre</label>
                                <input name='name' type={'text'} placeholder="Ingrese su nombre" value={order.buyer.name} onChange={handleInputChange} />
                                <label>Telefono</label>
                                <input name='phone' type={'tel'} placeholder="11-1234-5678" value={order.buyer.phone} onChange={handleInputChange} />
                            </div>
                            <div className='labelCont'>
                                <label>Mail</label>
                                <input name='email' type={'email'} placeholder="aaa@gmail.com" value={order.buyer.email} onChange={handleInputChange} />
                                <label>Dirección</label>
                                <input name='address' type={'text'} placeholder="Av. Siempreviva 742" value={order.buyer.address} onChange={handleInputChange} />
                            </div>
                        </form>
                        <h2 className='cardTitle'>Carrito</h2>
                        {cart.map((item) => (
                            <div className="contProduct" key={item.id}>
                                <img className="imgCart" src={item.image} alt={item.title}/>
                                <h3>{item.title}</h3>
                                <h3>{item.price}</h3>
                                <h4>{item.quantity}</h4>
                                <button className="bntEliminate" onClick={()=>removeItem(item)}>Eliminar</button>
                            </div>
                        ))}
                        <div className='contButtons'>
                            <button className="bntClear" onClick={()=>clear()}>Vaciar carrito</button>
                            <div className='contConfirm'>
                                <h3 className='total'>Total: ${totalAmount()}</h3>
                                <button onClick={createOrder} className="btnConfirm">Confirmar Compra</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;