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

    const removeItem = (product) => {
        let index = cart.findIndex(item => item.id === product.id);
        cart.splice(index, 1);
        console.log(cart);
    }
    const clear = () => {
        setCart([]);
    };

    console.log(cart);

    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    );
};


