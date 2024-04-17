let obj1={name:"Person 1",age:5};
let obj2={age:5,name:"Person 1"};
let result2=Object.keys(obj2).every(val=>obj1.hasOwnProperty(val) && obj1[val]===obj2[val])
console.log(result2);