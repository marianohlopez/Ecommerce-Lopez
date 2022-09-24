import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail.js";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState([])

    const { id } = useParams();

    const getItem = async () => {
        const db = getFirestore();
        const queryDoc = doc(db, 'items', id);
        getDoc(queryDoc).then((response) => {
            setItemDetail({id: response.id, ...response.data()});
        })
        .catch(error => console.log(error));
    }

    useEffect(() => {
        getItem()
    }, [id])

    return (
        <>
            {itemDetail && <ItemDetail product = {itemDetail} />}
        </>
    )
}

export default ItemDetailContainer;