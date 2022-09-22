import './style.css';

const Item = ({title, price, image}) => {
    return (
    <div className='card'>
        <img className="imgProduct" src={image} alt={title}/>
        <div className='priceTitle'>
        <h3>${price}</h3>
        <h4>{title}</h4>
        </div>
    </div>);
};

export default Item;