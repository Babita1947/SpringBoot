var arr = [100,200,300];
console.log(arr);
console.log(typeof arr);
//ADD THE LAST ELEMENT IN ARRAY
arr.push(500);
console.log(arr);
//REMOVE THE ELEMENT FROM LAST
arr.pop();
console.log(arr);
//ADD THE ELEMENT FIRST POSITION
arr.unshift(50);
console.log(arr);
//REMOVE THE FIRST ELEMENT
arr.shift();
console.log(arr);
//DELETE ELEMENT IN SPECIFIC POSITION
arr.splice(2,1);
console.log(arr);
//ADD DATA IN A SPECIFIC POSITION
arr.splice(2,0,300);
console.log(arr);
arr.push(400);
//RANGE OF VALUES
var newarry = arr.slice(2,4);
console.log(newarry);
//FOR EACH METHOD
arr.forEach(function(element, index){
    console.log(index, element);
})
//MAP FUNCTION
var newarry2 = arr.map(function(element, index){
    return element*10;
})
console.log(newarry2);
//FILTER DATA
var newarry3 = arr.filter(function(element, index){
    return element > 200;
})
console.log(newarry3);