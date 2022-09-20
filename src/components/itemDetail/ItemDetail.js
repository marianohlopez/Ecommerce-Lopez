import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from '../itemCount/ItemCount';
import './style.css';

const ItemDetail =({product}) => {

    const [initial, setInitial] = useState(1)

    const navigate = useNavigate();

    const { addToCart } = useContext(CartContext);

    const onAdd = (item) => {
        addToCart(item, initial);
        navigate('/cart');
    }

    return (
        <div className='descriptionCont'>
            <img className="imgDetail" src={product.image} alt={product.title}/>
            <div>
                <h3 className='title'>{product.title}</h3>
                <h3 className='title'>{product.price}</h3>
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
            </div>
        </div>
    )
}

export default ItemDetail;