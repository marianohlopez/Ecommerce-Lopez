import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            return cart.find(element => element.id === item.id).quantity++;
        }else{
            setCart([...cart, {...item, quantity}]);
        }
    };
    
    const isInCart = (id) => {
        return cart.some((element) => element.id === id)
    };

    const removeItem = (id) => {
        let index = cart.findIndex(item => item.id === id);
        cart.splice(index, 1);
        setCart([...cart]);
    };

    const clear = () => {
        setCart([]);
    };

    const totalAmount = () => {
        return cart.reduce((accumulator, element) => accumulator + element.price * element.quantity, 0);    
    };

    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem, totalAmount}}>
            {children}
        </CartContext.Provider>
    );
};


