
/* ----question 1 ------ */

console.log("Question 1");

function add(a,b){
    return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

var a = 10;
var b = 5;

console.log(add(a,b));
console.log(sub(a,b));
console.log(mul(a,b));
console.log(div(a,b));

/* ------ question 2 ------ */

console.log("Question 2");

var arr = [1,2,3,4,5,6,7,8,9,10];

function checkeven(){
    for(let i=0; i<arr.length; i++){{
        if(arr[i] % 2 == 0){
            console.log(arr[i]);
        }
    }}
}
checkeven(arr);

/* ----- Question 3 ------ */

console.log("Question 3");

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function mulnum() {
  for (let i = 0; i < arr.length; i++) {
     let ans = arr[i]* arr[i]; 
    console.log(ans);
  }
}
mulnum(arr);

/* -------- Question 4 -------*/

console.log("Question 4");

var res = "kishore";

function caps(){
    var res2 = res.charAt(0).toUpperCase();
    var res3 = res.slice(1);
    console.log(res2 + res3);
}
caps(res);
