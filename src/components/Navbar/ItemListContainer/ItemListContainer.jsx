import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "./asyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"



const ItemListContainer = ({greeting}) =>{
    const [producto, setProducto] = useState([])
    const {categoryId} = useParams()
    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory: getProducts

        asyncFunc(categoryId)
        .then(Response =>{
            setProducto(Response)
        })
        .catch(error =>{
            console.error(error)
        })

    }, [categoryId])
    return (
        <div>
        <h1>{greeting}</h1>
        <ItemList producto= {producto}/>
        </div>
    )
}
export default ItemListContainer