console.log("Mohamed Sayed");
/*

var a = 1_00;
var b = 2_00; 
var c = 1e2;  
var d = 2.4;  

// mallest//
var smallestNumber = Math.min(a, b, c, d);
var smallestInteger = Math.min(a, b, c, Math.floor(d));
console.log("Smallest Number: ", smallestNumber); 
console.log("Smallest Integer: ", smallestInteger); 

// 4 Method//
var result1 = Math.floor(d);
var result2 = Math.round(d);
var result3 = Math.trunc(d);
var result4 = parseInt(d);

console.log("floor :"+result1,"round :"+result2,"trunc :"+result3,"parseInt :"+result4);


// b+d == s "66.67" ,num=67//

var sum =(b + d)/3;
var fs=(66.67).toFixed(2);
var rsum=Math.round(sum);

console.log("fstring: ", fs); 
console.log("rsum: ", rsum); 


// a+d == 10000//

var summ = a * d * 41.6666667;
console.log(Math.floor(summ));


*/

/*******************************************************/
/*******************************************************/
/*******************************************************/

/*

var a = "hello from javascript";
console.log(a.slice(6, 10));
console.log(a.charAt(6)+a.charAt(7)+a.charAt(8)+a.charAt(9));



// return array [hello] //
console.log(a.split(" ",1));

//ssssss//
console.log("s".repeat(8));

console.log(a.substr(0,5));


// must be dynamic and string f and l capital //
console.log(a.charAt(0).toUpperCase() + a.slice(1,length-1).toLocaleLowerCase()+ a.slice(1,length-1).toLocaleUpperCase());

*/

/*******************************************************/
/*******************************************************/
/*******************************************************/


/*

let a = 10;
a < 10 ? console.log(10) :
a >= 10 && a <= 40 ? console.log("10 to 40") :
a > 40 ? console.log(">40") : console.log("unknown");


let text = "Your JavaScript";
text === "30" ? console.log("30") : null;


text[0] === "J" ? console.log("J") : null;


typeof text === "string" ? console.log("string") : null;


typeof a === "number" ? console.log("number") : null;


text.slice(0, 4).repeat(2) === "YourYour" ? console.log("your your") : null;


var degree = 65;
degree > 70 ? console.log("excellent") :
degree > 50 && degree <= 70 ? console.log("good") : console.log("fail");
*/



let myFriends = ["Sara", "Soha", "Ahmed", "Ali"];
myFriends.pop(); 
console.log(myFriends); 


let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); 


let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = arr1.concat(arr2).sort().reverse().join("").slice(0, 3).toLowerCase();
console.log(allArrs); 




let Zero = 0;
let counter = 3;
let my = ["Ahmed", "Maryan", "Elham", "Osama", "Gamal", "Ameer"];
let result1 = my.slice(Zero + 3, counter + 1).reverse();
console.log(result1); 


let result2 = my.slice(counter - 1, Zero + 2);



let result3 = my[2].slice(Zero, counter - 1) + my[1].slice(counter - 2);
console.log(result3); 


let result4 = my[Zero + 5].slice(-1).toLowerCase() + my[Zero + 4].slice(Zero, 1).toUpperCase();
console.log(result4); 
