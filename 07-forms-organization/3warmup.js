const products = require('./products.json');

const saleProducts = (arr) => {
    return arr.filter((product)=> {
        return product.price !== product.originalPrice
    })
}

const itemsOnSale = saleProducts(products)
console.log(itemsOnSale)