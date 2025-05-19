// singleton

//object literals
const mySym = Symbol ("key1")
const JsUser = {
    
    
    name: "falguni",
    age: 23,
    location: "wardha",
    email: "falu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","Friday"],
   [mySym]: "mykey1"

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// JsUser.email = "falgunisuryawanshi@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "falgunisuryawanshi@chatgpt.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello Jsuser")
}
JsUser.greetingTwo = function(){
    console.log(`hello Js User, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





