//array//

const myArr = [0,1,2,3,4]
const myHeros = ["ironman","Thor","spiderman"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);

// Array Method

// myArr.push(6)//to add last element
// myArr.pop()//to remove last element
// myArr.unshift(9)//to add 0th index element
// myArr.shift()//to remove unshift//

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(18)); //write an index if element not present it give -1

// const newArry = myArr.join()
// console.log(newArry);


console.log(myArr);

//slice,splice

console.log("A",myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1,);
console.log("B",myArr);


const myn2 = myArr.splice(1, 3)

console.log(myn2,);
console.log("C",myArr);




