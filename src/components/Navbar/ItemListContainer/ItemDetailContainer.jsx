import { useState, useEffect } from "react";
import { getProductById } from "./asyncMock";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
   
    const {itemId} = useParams()

    useEffect(() => {
        getProductById (itemId)
        .then(Response=>{
           setProducto(Response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])
    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer