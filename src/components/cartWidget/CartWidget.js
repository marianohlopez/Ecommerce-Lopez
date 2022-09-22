import './style.css';
import cartImage from './cart.png';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {

    const { cart } = useContext(CartContext);

    return (
        <>
            {cart.length === 0 ? <></> : (
                <>
                    <div className='cartWidgetCont'>
                        <img className='cart' alt='Cart' src={cartImage}/>
                        <div className='cartNumber'>{cart.reduce((accumulator, element) => accumulator + element.quantity, 0)}</div>
                    </div>
                </>   
            )}
        </>
    );
}

export default CartWidget;