import './style.css';
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from '../itemCount/ItemCount';
import { useNavigate } from 'react-router-dom';

const ItemDetail =({product}) => {

    const navigate = useNavigate();

    const [initial, setInitial] = useState(1)

    const { addToCart, cart } = useContext(CartContext);

    const onAdd = (item) => {
        addToCart(item, initial);
    }

    return (
        <div className='contDetail'>
            <div className='descriptionCont'>
                <img className="imgDetail" src={product.image} alt={product.title}/>
                <div className='listDescriptionCont'>
                    <h2 className='productTitle'>{product.title}</h2>
                    <h3 className='priceTitle'>${product.price}</h3>
                    <ul className='listDescription'>
                        <li>Marca: {product.trademark}</li>
                        <li>Linea: {product.line}</li>
                        <li>Modelo: {product.model}</li>
                        <li>Año de fabricación: {product.year}</li>
                        <li>Origen: {product.made}</li>
                        <li>Color: {product.color}</li>
                    </ul>
                    <ItemCount stock={product.stock} initial={initial} setInitial={setInitial} />
                    <button className="bntAgregar" onClick={()=>onAdd(product)}>Agregar al carrito</button>
                    <button className={cart.length >= 1 ? 'bntAgregar' : 'inactiveFinish'} onClick={() => navigate('/cart')}>Ir al carrito</button> 
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;