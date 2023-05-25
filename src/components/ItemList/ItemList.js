import Item from "../Item/Item"


const ItemList = ({products}) => {
    return(

        <div className='Listgroup'>
            {products.map((p)=>{
                return(
                    <Item
                    id={p.id}
                    name={p.name} 
                    category={p.category}
                    price={p.price} 
                    desc={p.desc} 
                    img={p.img} 
                    stock={p.stock}
                    />
                )
            })},
        </div>


    )

}

export default ItemList

