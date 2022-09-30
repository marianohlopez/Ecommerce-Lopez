import './style.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc, getFirestore, updateDoc, doc} from 'firebase/firestore';
import moment from 'moment';

const Cart = () => {
    const { cart, clear, removeItem, totalAmount } = useContext(CartContext);
    const navigate = useNavigate();
    const order ={
        buyer: {
            name: 'Mariano',
            phone: 45887546,
            email: 'test@gmail.com'
        },
        items: cart,
        total: totalAmount(),
        date: moment().format('DD/MM/YYYY, h:mm:ss a'),
    }

    const db = getFirestore();

    const createOrder = () => {
        const query = collection(db, 'orders');
        addDoc(query, order)
        .then((response) => {
            console.log(response);
            updateStockitem();
            alert('Felicidades por tu compra')})
        .catch(() => alert('Tu compra no pudo ser completada'))
    };

    const updateStockitem = () => {
        cart.forEach((product) => {
            const queryUpdate = doc(db, 'items', product.id);
            updateDoc(queryUpdate, {
                title: product.title,
                category: product.category,
                color: product.color,
                line: product.line,
                model: product.model,
                year: product.year,
                stock: product.stock - product.quantity,
                price: product.price,
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

    return(
        <div className="container">
            <div className="contCart">
                <h2 className='cardTitle'>Carrito</h2>
                {cart.length === 0 ? 
                    <>
                        <h2 className='noProduct'>Todavia no hay productos en tu carrito</h2>
                        <Link to={'/'} className="backLink">Volver a comprar</Link>
                    </> : (
                    <>
                        {cart.map((item) => (
                            <div className="contProduct" key={item.id}>
                                <img className="imgCart" src={item.image} alt={item.title}/>
                                <h3>{item.title}</h3>
                                <h3>{item.price}</h3>
                                <h4>{item.quantity}</h4>
                                <button className="bntEliminate" onClick={()=>removeItem(item.id)}>Eliminar</button>
                            </div>
                        ))}
                        <div className='contButtons'>
                            <button className="bntEliminate" onClick={()=>clear()}>Vaciar carrito</button>
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