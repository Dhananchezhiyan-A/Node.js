//  1. JSON.parse()
//  What it does:
// Converts JSON string → JavaScript object

const Z='{"Name":"Jay","Age":"23"}'
const obj=JSON.parse(Z)
// console.log(obj.Name,obj.Age)

// 2. JSON.stringify()
//  What it does:
// Converts JavaScript object → JSON string

const X='{Game:"Cricket",Team:"India"}'
const obj1=JSON.stringify(X)
// console.log(obj1)

// 3. JSON.isRawJSON()
// New / advanced method (not widely used yet)
//  What it does:
// Checks if value is a raw JSON object created by rawJSON()

const Y= JSON.rawJSON('{"a":1}')
console.log(JSON.isRawJSON(Y))