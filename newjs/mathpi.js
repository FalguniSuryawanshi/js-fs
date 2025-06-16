const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }   math.pi contain univarsal constant cause it contain hardcore valu 


const chai = {
    name: "b-tech chai",
    price: 300000,
    isAvailable: true,

    orderChai: function(){
        console.log("chai is waiting");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name',{
    writable: false,
    enumerable: false,

    
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let  [key, value] of object.entries(chai)) {
    if (typeof value !== 'function'){
        console.log(`${key}: ${value}`);
        
    }
}
    

