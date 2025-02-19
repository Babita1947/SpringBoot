//NORMAL FUNCTION
function fn1(){
    console.log("NORMAL FUNCTION");
}
fn1();

//PARAMETERISED FUNCTION
function fn2(x,y){
   console.log(x,y);
}
fn2(10,20);
//FUNCTION WITH RETURN STATEMENT
function fn3(x,y){
    return x+y;
}
let res = fn3(10,23);
console.log("RESULT",res);
//ANNONYMOUS FUNCTION === FUNCTION WITHOUT NAME
function fn4(f){
    console.log(f);
    f();
}
fn4(function f(){
    var city = "KOLKATA";
    console.log(city);
})
//CALLBACK AND HIGHER ORDER FUNCTION
function print(){
    var state = 'WEST BENGAL';
    console.log("STATE:",state);
}
function fn5(f){
    console.log(f);
    f();
}
fn5(print);

//FUNCTION EXPRESSION
var result = function(){
    var nm = 'Nilam';
    console.log("NAME:",nm);
}
result();