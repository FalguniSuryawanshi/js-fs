// immedietly invoke function expressions(IIFE)


(function chai(){
    console.log("DB connected");
    
})
();

(() => {
    console.log("DB connected");
    
})
();

((name) => {
    console.log(`DB connected ${name}`);
    
})("fs")
//  1()used to invoke funtion , 2() used to immidietly execute
// hence iife used to avoid global pollutionn in scope 