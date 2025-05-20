
// function sayMyName(){
//     console.log("f");
//     console.log("a");
//     console.log("l");
//     console.log("u");
    
// }

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 +number2);
    
// }
// addTwoNumbers(3,4)


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    return number1 + number2
    
}
 const result = addTwoNumbers(3, 4)
console.log("Result:",result);

// function loginUserMessage(username){
//     return`${username} just log in`

// }
// console.log(loginUserMessage("mommy"));
// // console.log(loginUserMessage());  if value is not pass the result is undefine 

// function loginUserMessage (username){
//     if(username === undefined)
//         console.log("please enter username");
//     return
        
// }
// console.log(loginUserMessage());
// function loginUserMessage (username){
//     if(!username )
//         console.log("please enter username");
//     return
        
// }
// console.log(loginUserMessage());


function loginUserMessage(username = "sam") {
    if (!username)
        console.log("please enter username");
    else
        console.log(username);
}

loginUserMessage(); // prints "sam"


function loginUserMessage (username = "sam"){
    if(!username){
        console.log("please enter the username");
        return
        
    }
    return`${username} just log in `
}
console.log((loginUserMessage("falu")));




// in function which you define  as an input is call paremeters
// in function whatever you call its output  call arguments

