/*
let obj=null;
console.log(`type of obj:${obj}`)//litarel er sutro (`${variable name}`)
console.log(`type of obj:${typeof obj}`);
*/


/*
let user = {name: 'provat', roll: 20};
 
//name,roll =property : provat, 20 =value.shutro, let object ={object key/property:value}
 
console.log(user.name,user.roll);//oneline objectview in console

//jehetu: consol.log (user = object.name = property:),sutorang, shutro: (object.proprty)

console.log(user.roll);

*/

/*

let array = ['Provat',24,true,null];
console.log(array [0],array[1]);//eda one line e console variable,variable shutro.array=[data types]>consol.log(array[],array[])//eda one line e arry . nicher ta multiple line array.
console.log(array [1]);
console.log(array [2]);
console.log(array [3]);
console.log(typeof array);

*/

//let user = 'click ok to continue';
//alert(user);
/*
userInput= prompt('enter the captcha');

console.log(userInput);

console.log(typeof userInput);
*/
//confirm(user);

//Number to string convertion
let num2str = 50;
console.log(num2str);
console.log(typeof num2str);
num2str = String(num2str); // 
console.log(num2str);
console.log(typeof num2str);

//String to Number convertion
let str2num = 'provat';
console.log(str2num);
console.log(typeof str2num);
str2num = Number(str2num); // Corrected line
console.log(str2num);//will show null not Nan
console.log(typeof str2num);//converted to type number

//Boolean to Number 
let bol2num = true;
console.log(bol2num);
console.log(typeof bol2num);
bol2num = Number(bol2num); // Corrected line
console.log(bol2num);
console.log(typeof bol2num);
//if false the value will show 0.


//Number to boolean
let num2bol = 0;
console.log(num2bol);
console.log(typeof num2bol);
num2bol = Boolean(num2bol); // Corrected line
console.log(num2bol);
console.log(typeof num2bol);
//50= number converted to true= boolean
//0=number will convert to false=boolean

//null 2 num
let null2num = null;
console.log(null2num);
console.log(typeof null2num);
null2num = Number(null2num); // Corrected line
console.log(null2num);//0
console.log(typeof null2num);//



// num 2 null
let num2null = 0;
console.log(num2null);
console.log(typeof num2null);
null2num = null; // error bcz null is not a valid function or keyword.
console.log(num2null);//0
console.log(typeof num2null);




//some issues to remember
// JS basically thinks all the variables are string

let num1=5;//here 5 is string
let num2=2//2 is number

console.log((num1)-(num2));

//numerical calculation.though num1 is string JS automatically converts the string to number then calculate.


console.log('result:${num1}+${num2}');

//* The  console.log(result:${num1}-${num2}) statement is using template literals to construct a string. It includes the values of num1 and num2 within the string using ${...} placeholders. However, since num1 is a string and num2 is a number, JavaScript performs a string concatenation operation instead of numerical subtraction. The output would be the string 'result:5-2'. *// 

console.log(num1)

