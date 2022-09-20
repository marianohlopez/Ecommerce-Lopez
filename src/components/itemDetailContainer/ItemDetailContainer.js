import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail.js";
import data from "../mockData.js";

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState([])

    const { id } = useParams();

    useEffect(() => {
        getItem.then((response) => {
            setItemDetail(response);
        })
        .catch((error) => console.log(error));
    }, [])

    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            resolve(data.find(el => el.id === id));
        },2000);
    })

    return (
        <>
            {itemDetail && <ItemDetail product = {itemDetail} />}
        </>
    )
}

export default ItemDetailContainer;