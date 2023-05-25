import { useState, useEffect, } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const {productId} = useParams();

    useEffect(() => {
        getProductById(productId)
            .then(response => {
                setProduct(response)
            })
        .catch(error =>{
            console.error(error)
        })
    },[])

    return ( 
        <div className="ItemDetailContainer">
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer