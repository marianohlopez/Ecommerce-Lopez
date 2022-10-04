import './style.css';
import ItemList from '../itemList/ItemList.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';

const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);

    const { categoryName } = useParams();

    const getProducts = async () => {
        const db = getFirestore();
        const queryBase = collection(db, 'items');
        const querySnapshot = categoryName ? query(queryBase, where("category", "==", categoryName)) : queryBase;

            getDocs(querySnapshot).then((response) => {
                const data = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()};
                });
                setProductList(data);
            })
            .catch((error) => console.log(error));
        };
    
    useEffect(() => {
        getProducts()
    }, [categoryName])
    
    return (
        <>
            {productList == false ? <h2>Cargando...</h2> : <ItemList list = {productList} />}
        </>
    );
}

export default ItemListContainer;