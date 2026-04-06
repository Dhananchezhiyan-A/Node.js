/*const i = "history";
if (i<10) {
    console.log("hello world")
}else if(i>10){
    console.log("true")
}else{
    console.log("Hi Node.js")
}
*/

//if-else
// let num= 10;
// switch (num) {
//     case 1: console.log('Start of the week!');        
//         break;
//     case 2: console.log('2 week!');        
//         break;
//     case 3: console.log('3 week!');        
//         break;
//     default:console.log('3 week!'); 
//         break;
// }

// swith
// let flag=false;
// let value=flag?'hello':'hi'
// console.log(value)


//for loop

// let num = [5,'five',6,'six']
// for (let index = 0; index < num.length; index++) {
//     console.log(index,num[index])    
// }

// while loop

// let num=1
// while (num<5) {
//     console.log(num)
//     num++
// }


// do{
//     console.log("hi")
//     num++;
// }while (num<8);



// const person = { name: 'Alice', age: 25, city: 'Chennai' }; 
// for (let key in person) {
// console.log(key, ':', person[key]); } // name : Alice // age : 25 // city : Chennai

// const n = {A:2 , b:'hii', c:'hello'}
// for(let key in n){
//     console.log(key,':' ,n[key])
// }

// const colors = ['red', 'green', 'blue'];
// for (let color of colors) {
//      console.log(color); }


// for (let char of '2545859855') {
//      console.log(char);  }// N, o, d, e


// const num=['one','two','three','four']
// for(let n of num){
//     console.log(n)
// }


//  Array Iteration Methods

// const n=[2,5,5,8,7]

// forEach
// n.forEach(n=>console.log(n+10))
// n.forEach(n=>console.log(n))

// map
// const d=n.map(n=>n/2)
// console.log(d)


// const numbers = [1, 2, 3, 4, 5]; 
// //filter
// const evens = numbers.filter(n => n % 2=== 0); 
//  console.log(evens);
// //reduce Adding Array Values Like 1+2+3+5+6
// const sum =numbers.reduce((acc, n) => acc + n, 0);
// console.log(sum);

// a → accumulator (stores result)
// i → current value from array
// 10 is the initial value of accumulator
// const N= numbers.reduce((a,i)=>a+i,10)
// console.log(N)


//  Functions

// function name(one) {
//     return 'Hello,'+one+'!'
// }
// console.log(name("Deepa D"))

// const num = function name(b,c) {
//     return (b*c)+c
// }
// console.log(num(20,53))

// Arrow Functions (ES6)

// const name=n=>n*n;
// console.log(name(5))

// call(), apply(), and bind()

// function introduce(city, country) {
//      console.log(`Hi, I'm ${this.name} from ${city},
// ${country}`);
// console.log(`Hi,I'm ${this.name} from ${city}`)
//  } 
// const user = { name: 'Alice' }; 
// introduce.call(user, 'Chennai', 'India');


// console.log("Hello");  
// process.stdout.write("Hi"); 
// process.stdout.write("Hi"); 




 
// File System & HTTP 

// const A = 32000;
// const B = 1200;
// const C = 355;

// const total = A + B + C;

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'content-type':'text/plain;charset=utf-8'});
//     res.end(`Total Expense: ₹${total}`);
// });

// server.listen(3000, () => {
//     console.log('Running At http://localhost:3000');
// });




// Async & Promises

// const myPromise = new Promise ((resolve,reject)=>{
//     let success= true;

//     if (success) resolve("done!");
//     else reject("failed!");
//     console.log(success)
// });

// myPromise
// .then( result=>console.log(result))
// .catch( error =>console.log(error));




// async function getData() {
//   try {
//     const data = await Promise.reject("Oops!");
//     console.log(data);
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

// getData();


// Promise All

// const A= Promise.resolve("All")
// const B= Promise.resolve("Ball")
// const C= Promise.resolve("Call")

// Promise.all([A,B,C])
// .then(a=>console.log(a));


