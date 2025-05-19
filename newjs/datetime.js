let myDate = new Date()
// console.log(myDate.toDateString())
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2025,2,23)
// let myCreatedDate = new Date(2025, 2, 23, 5, 6)
// let myCreatedDate = new Date("2025-12-01")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime)
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday: "long",
})





// `${newDate.getDay()and the time}`





