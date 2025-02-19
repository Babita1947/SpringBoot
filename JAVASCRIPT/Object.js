var product = {
    
    pqty: 12,
    price:45000.00
}
console.log(product);
console.log(product.pqty, product.price);
//ADD A ELEMENT IN EXISTING OBJECT
product.company = 'HP';
console.log(product);
//DELETE THE ELEMENT


var Employee = {
    eid:101,
    nm: 'BABITA',
    desig: 'MANAGER',
    address:{
       plotno:'AD10',
       steetm:'SALTLAKE CITY',
       pincode: '304345',
       area:{
        ps:'BIDHANNAGAR',
        dist:'BURDWAN'
       }
    }
}