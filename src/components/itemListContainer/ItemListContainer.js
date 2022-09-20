import './style.css';
import ItemList from '../itemList/ItemList.js';
import data from '../mockData.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    const { categoryName } = useParams();
    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response);
        })
        .catch((error) => console.log(error));
    }, [categoryName])
    
    const getProducts = new Promise((resolve, reject) => {
        if(categoryName) {
            setTimeout(() => {
                resolve(data.filter((item) => item.category === categoryName));
                reject("hubo un error")
            }, 2000);
        }else{
            setTimeout(() => {
                resolve(data);
                reject("hubo un error")
            }, 2000);
        }
    });
    
    return (
        <>
            <ItemList lista = {productList} />
        </>
    );
}

export default ItemListContainer;