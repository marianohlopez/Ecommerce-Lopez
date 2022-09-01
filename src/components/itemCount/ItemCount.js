import { useState } from "react";
import './style.css'

const ItemCount = ({stock}) => {
    const [initial, setInitial] = useState(0)
    const Add = () => {
        initial < stock ? setInitial(initial + 1) : alert("no hay mas stock disponible");
    }

    const Remove = () => {
        initial > 0 ? setInitial(initial -1) : alert("no se puede bajar de 0");
    }
    
    return (
        <div className="counter">
            <div className="counterInput">
                <span className="btnCounter" onClick={Remove}>-</span>
                {initial}
                <span className="btnCounter" onClick={Add}>+</span>
            </div>
            <button className="bntAgregar">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;