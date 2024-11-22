//Task4
interface Product {
    name: string;
    price: number;
}
const Products: Product[] = [
    { name: "Apple", price: 3 },
    { name: "Banana", price: 2.5 },
    { name: "Orange", price: 5 },
];
function CalculateProductPrice(Products:Product[]):number{
    const total = Products.reduce((sum, product) => sum + product.price, 0);
    return total;
}
console.log("The Total Price is:" ,CalculateProductPrice(Products));

//validate email(Task5)
function ValidateEmail(email:string):boolean{
    const emailRegex=(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
       return emailRegex.test(email);
    
}
let email="email@gmail.com" ;
console.log(ValidateEmail(email));