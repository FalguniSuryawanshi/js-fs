const Useremail = "fs@gmail"

// if (Useremail) {
//     console.log("got a user");
  
// }else{
//     console.log("not a user");
    
// }

// // falsy values

// false , 0, -0, BigInt 0n, "", null, undefine, NaN

// // truthy values 

// true, [],'ok'," ", {}, function(){},  


// if (Useremail.length === 0) {
//     console.log(" Araay is empty");   
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0 ) {
    console.log("object is empty");
    
    
}

// nyllish Coalscing operator(??) : null define

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// terniary operatoe :

// condition ? true:false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80s")

