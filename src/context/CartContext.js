import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            Swal.fire({
                title: `${item.title} ya está en el carrito`,
                showConfirmButton: false,
                timer: 2000
            })
        }else{
            setCart([...cart, {...item, quantity}]);
            Swal.fire({
                title: `Se agrego ${item.title} al carrito`,
                showConfirmButton: false,
                timer: 2000
            })
        }
    };

    const counterWidget = () => {
        return cart.reduce((accumulator, element) => accumulator + element.quantity, 0);
    }
    
    const isInCart = (id) => {
        return cart.some((element) => element.id === id)
    };

    const removeItem = (item) => {
        setCart(cart.filter((product) => product.id !== item.id));
        Swal.fire({
            title: `Se eliminó ${item.title} del carrito`,
            showConfirmButton: false,
            timer: 2000
        })
    };

    const clear = () => {
        setCart([]);
    };

    const totalAmount = () => {
        return cart.reduce((accumulator, element) => accumulator + element.price * element.quantity, 0);    
    };

    return(
        <CartContext.Provider value={{cart, setCart ,addToCart, clear, removeItem, totalAmount, counterWidget}}>
            {children}
        </CartContext.Provider>
    );
};


