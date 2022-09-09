import './style.css';

const ItemDetail = ({lista}) => {

    return (
        <div className='descriptionCont'>
            <img className="imgDetail" src={lista.image} alt={lista.title}/>
            <div>
                <h3 className='title'>{lista.title}</h3>
                <h3 className='title'>{lista.price}</h3>
                <ul className='listDescription'>
                    <li>Marca: {lista.trademark}</li>
                    <li>Linea: {lista.line}</li>
                    <li>Modelo: {lista.model}</li>
                    <li>Año de fabricación: {lista.year}</li>
                    <li>Origen: {lista.made}</li>
                    <li>Color: {lista.color}</li>
                </ul>
            </div>
        </div>
    )
}

export default ItemDetail;