import './style.css';
import Item from "../item/Item.js";

const ItemList = ({lista}) => {
    
    return (
    <div className="itemList">
        {lista.map((product) => (
            <Item 
                key={product.id}
                title={product.title} 
                price={product.price} 
                image={product.image} 
            />
        ))}
    </div>
    );
}

export default ItemList;