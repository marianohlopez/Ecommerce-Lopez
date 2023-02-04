import './style.css';
import Item from "../item/Item.js";
import { Link } from 'react-router-dom';

const ItemList = ({ list }) => {

    return (
        <div className="itemList">
            {list.map((product) => (
                <Link key={product.id} className="linkItem" to={'/detail/' + product.id}>
                    <Item
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                </Link>
            ))}
        </div>
    );
}

export default ItemList;