var Products = [
    { name: "Apple", price: 3 },
    { name: "Banana", price: 2.5 },
    { name: "Orange", price: 5 },
];
function CalculateProductPrice(Products) {
    var total = Products.reduce(function (sum, product) { return sum + product.price; }, 0);
    return total;
}
console.log("The Total Price is:", CalculateProductPrice(Products));
//validate email
function validateEmail(email) {
    var emailRegex = (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    return emailRegex.test(email);
}
var email = 'email@gmail.com';
console.log(validateEmail(email));
