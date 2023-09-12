/*
export default [
    {id: 1, title: "book1", price:200},
    {id: 2, title: "shoes", price:120},
    {id: 3, title: "jacket", price:450},
    {id: 4, title: "scarf", price:20},
    {id: 5, title: "jeans", price:370},
] 
*/
// روش بهتر

const product = [
    {id: 1, title: "book1", price:200},
    {id: 2, title: "shoes", price:120},
    {id: 3, title: "jacket", price:450},
    {id: 4, title: "scarf", price:20},
    {id: 5, title: "jeans", price:370},
] 
function getProductsFromDB () {
    return new Promise((resolve , reject) => {
        if(product.length > 0) resolve(product) ;
        else reject(new Error("Not found any products."))
    })
}
export default getProductsFromDB ;