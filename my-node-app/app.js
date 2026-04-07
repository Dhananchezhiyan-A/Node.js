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
// Works on strings too: 
// for (let char of '2545859855') {
//      console.log(char);  }// N, o, d, e


// const num=['one','two','three','four']
// for(let n of num){
//     console.log(n)
// }

const n=[2,5,5,8,7]

// forEach
// n.forEach(n=>console.log(n+10))

// map
const d=n.map(n=>n/2)
console.log(d)

// forEach
n.forEach(n=>console.log(n))
