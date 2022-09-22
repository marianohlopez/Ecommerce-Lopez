import './style.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clear, removeItem, totalAmount } = useContext(CartContext);
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
                        <div className='contBtnElim'>
                            <button className="bntEliminate" onClick={()=>clear()}>Vaciar carrito</button>
                            <h3 className='total'>Total: ${totalAmount()}</h3>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;