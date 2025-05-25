const user = {
    username :"fs",
    price: 900,

    welcomeMessage: function (){
        console.log(`${this.username}, welcome  to website`);
        console.log(this);
        
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     console.log(this);
    
// }
// chai()

// const chai = function(){
//     let username = "fs"
//     console.log(this.username);
    

// }
// chai()

const chai = () =>  {
    let username = "fs"
    console.log(this.username);
    

}
// chai()

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(3,4));


// const addTwo = (num1, num2) => num1 + num2

//inplicit return 

// const addTwo = (num1, num2) =>( num1 + num2)

const addTwo = (num1, num2) =>({username:"fs"})
// object returen used curly breces inside the parenthisis 


console.log(addTwo(3,4));



