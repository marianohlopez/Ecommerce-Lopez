import './style.css';
import cartImage from './cart.png';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {

    const { cart, counterWidget } = useContext(CartContext);

    return (
        <>
            {cart.length === 0 ? '' : (
                <>
                    <div className='cartWidgetCont'>
                        <img className='cart' alt='Cart' src={cartImage} />
                        <div className='cartNumber'>{counterWidget()}</div>
                    </div>
                </>
            )}
        </>
    );
}

export default CartWidget;