const products = [
        {
            id: 1 , 
            name: 'Box Demon Slayer',
            category: 'Mangas',
            desc: 'Coleccion completa de Demon Slayer (23 tomos)' ,
            price: 46000,
            img: "https://i.ebayimg.com/images/g/r30AAOSwf7Bh-FwB/s-l1600.jpg",
            stock: 10,
            
        },  {
            id: 2,
            name: 'Box Tokyo Ghoul',
            category: 'Mangas',
            desc: 'Coleccion completa de Tokyo Ghoul (14 tomos)',
            price: 28000,
            img: "https://i.ebayimg.com/images/g/nj4AAOSw7vxgg6Sn/s-l1600.jpg",
            stock: 10,
        },  {
            id: 3,
            name: 'Figura Ichigo Vasto Lorde',
            category: 'Figuras',
            desc: 'Figura Ichigo Vasto Lorde',
            price: 70000,
            img: "https://i.ebayimg.com/images/g/d2wAAOSwMMhjFE7A/s-l1600.jpg",
            stock: 10,
        },  {
            id: 4,
            name: 'Figura Ichigo Mugetsu',
            category: 'Figuras',
            desc: 'Figura Ichigo Mugetsu',
            price: 55000,
            img: "https://m.media-amazon.com/images/I/71pDtDaZHqL._AC_SL1500_.jpg",
            stock: 10,
        },

    ]
    
    export const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products)
            }, 1000)
    })
}

    export const getProductById = (productId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.find(p => p.id == productId))
            }, 1000)
    })
}