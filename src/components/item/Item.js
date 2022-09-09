import './style.css';

const Item = ({title, price, image}) => {
    return (
    <div className='card'>
        <img className="imgProduct" src={image} alt={title}/>
        <div>
        <h3>{price}</h3>
        <h3>{title}</h3>
        </div>
    </div>);
};

export default Item;