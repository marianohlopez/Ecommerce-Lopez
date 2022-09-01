import './style.css';
import ItemCount from '../itemCount/ItemCount.js';

const ItemListContainer = ({greeting}) => {
    const stock = 10;
    return (
        <>
        <h1>{greeting}</h1>
        <ItemCount stock={stock}/>
        </>
    );
}

export default ItemListContainer;