// SPREAD OPERATOR
// COPY DATA FROM ONE OBJECT TO ANOTHER OBJECT
var obj1 = {
    id:101,
    nm:'ARUP',
    dept:'HR'
}
var obj2 = {
    ...obj1,
    dept:'FINANCE'
}
console.log(obj1);
console.log(obj2);

//REST PARAMETER 
function fn1(x,y,...data){ 
    console.log(x,y,data);
}
fn1(19,22);
fn1(19,22,11,12);

//DESTRUCTING THE OBJECTS
var obj3 = {
    id: 102,
    nm: 'ALOKE',
    phno: '1234567891'
}
var{nm, phno} = obj3;
console.log(nm);
console.log(phno);

//ARROW FUNCTION
// function fn(){
//     console.log("CONCRETE FUNCTION");
// }
const fn = () => {
    console.log("CONCRETE FUNCTION");
}
fn();

var arr = [100,200,300,400];
// //FOR EACH METHOD
// arr.forEach(function(element, index){
//     console.log(index, element);
// })
const fn2 = (arr) => {
    arr.forEach((element, index) => {
        console.log(element, index);
    });
}
fn2(arr);

// //MAP FUNCTION
// var newarry2 = arr.map(function(element, index){
//     return element*10;
// })


var arr = [100, 200, 300, 400];
const fn3 = (arr) => {
    arr.map((element, index) => {
        console.log(element, index);
    });
}
fn3(arr);

