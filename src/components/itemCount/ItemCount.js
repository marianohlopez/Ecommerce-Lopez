import { isDisabled } from "@testing-library/user-event/dist/utils";
import './style.css'

const ItemCount = ({stock, initial, setInitial}) => {
    const Add = () => {
        initial < stock ? setInitial(initial + 1) : isDisabled();
    }

    const Remove = () => {
        initial > 0 ? setInitial(initial - 1) : isDisabled();
    }
    
    return (
        <div className="counterContainer">
            <p>CANTIDAD:</p>
            <div className="counterInput">
                <span className="btnCounter" onClick={Remove}>-</span>
                    {initial}
                <span className="btnCounter" onClick={Add}>+</span>
            </div> 
        </div>

    )
}

export default ItemCount;