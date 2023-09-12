//modules
import { getUsersFromDB, systemMessage } from "./users.js" 
//import productList from "./products.js"
import getProductsFromDB from "./products.js";
import getUserBasket from "./user-basket.js";
 

/*getUsersFromDB().then(data =>{
    console.log(data);
 }); */
 
 //console.log(systemMessage);

 //console.log(productList);

 /*getProductsFromDB().then(products => {
   console.log(products);
 }) */
 
 async function main () {
       try { 
        const users = await getUsersFromDB() ;
        const products = await getProductsFromDB() ;
        const userBasket = await getUserBasket() ;
        console.log(users);
        console.log(products);
        console.log("---------------------------------------");
        console.log(userBasket);
       } catch(error) {
          console.error(error);
       }
 }
 main() ;