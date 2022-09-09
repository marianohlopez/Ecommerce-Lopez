import { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/ItemDetail.js";
import data from "../mockData.js";

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState([])

    useEffect(() => {
        getItem.then((response) => {
            setItemDetail(response);
        })
        .catch((error) => console.log(error));
    }, [])

    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            resolve(data.find(el => el.id ==='1'));
        },2000);
    })

    return (
        <>
            <ItemDetail 
            lista = {itemDetail} />
        </>
    )
}

export default ItemDetailContainer;