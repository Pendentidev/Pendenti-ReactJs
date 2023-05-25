import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Navbar from "../NavBar/NavBar"




const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();
    
    useEffect(() => {
      console.log(categoryId)
        if (categoryId) {
            getProducts().then(res => setProducts(res.filter(p => p.category.toLowerCase() === categoryId)));
        } else {
            getProducts().then (res=> setProducts(res));
        }
    
    },[categoryId])

    
    
    
    return (

        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>

    )
}

export default ItemListContainer

