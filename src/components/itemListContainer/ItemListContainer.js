import './style.css';
import ItemCount from '../itemCount/ItemCount.js';
import ItemList from '../itemList/ItemList.js';
import data from '../mockData.js';
import { useEffect, useState } from 'react';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response);
        })
        .catch((error) => console.log(error));
    }, [])
    
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
            reject("hubo un error")
        }, 2000);
    });
    
    const stock = 10;
    return (
        <>
            <ItemList lista = {productList} />
            <ItemCount stock={stock} />
        </>
    );
}

export default ItemListContainer;