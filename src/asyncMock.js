const products  = [
    { 
        id: '1', 
        name: 'Shampoo Head & Shoulders Manzana Fresh x 375 ml', 
        price: 690, 
        category: 'Cuidado Personal', 
        img:"../images/shampoo_head_shoulders.jpg", 
        stock:20, 
        description:'El shampoo Head & Shoulders Manzana Fresh, fue reformulada con una mezcla de ingredientes que ayudan a limpiar las impurezas desde la raíz, y que te ayudan a tener un cuero cabelludo saludable para que puedas lucir un cabello limpio y hasta 100% libre de caspa.'
    },
    { 
       id: '2', 
        name: 'Spray Corporal Reparador Eucerin Aquaphor para Piel Seca x 150 ml', 
        price: 2100, 
        category: 'Dermocosmetica', 
        img:"../images/eucerin-aquaphor-rep-spr-x150.jpg", 
        stock:25, 
        description:'El Spray corporal reparador Eucerin Aquaphor libre de agua permite retener la humedad y mantener la piel hidratada intensamente, brindando una sensación de alivio inmediato.'
    },
    /* { 
        id: '2', 
        name: 'EDT Pacha Ibiza 24/7 Vip Her x 80 ml', 
        price: 1250, 
        category: 'Belleza', 
        img:"images/EDT_Pacha_Ibiza.jpg", 
        stock: 4, 
        description:'Pacha fragancias presenta su universo Ibiza 24/7, perfumes que nos invitan a vivir el espíritu de esta isla al máximo durante todo el día.'
    }, */
    {
        id: '3', 
        name: 'Limpiador Líquido Desinfectante Concentrado Para Pisos Lysoform Lavanda Repuesto x 420 ml', 
        price: 125, 
        category: 'Hogar y Limpieza', 
        img:"../images/liquido_desinfectante.jpg", 
        stock:10, 
        description:'Limpia profundamente y además desinfecta todas las superficies de su hogar en un solo paso, liberando un agradable aroma en cada aplicación.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products[id])
        }, 2000)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 2000)
    })
}
