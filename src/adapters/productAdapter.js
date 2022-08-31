export const adapterProduct = (doc) => {
    const data = doc.data()

    const productAdapted = { 
        id : doc.id,
        tittle: data.name,
        img: data.img,
        price: data.price,
        category: data.category,
        description: data.description
    }

    return productAdapted
}