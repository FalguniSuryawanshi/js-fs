// Set TimeOut

// setTimeout(function(){
//     console.log("fs");
    
// },2000)

// const sayFs = function(){
//     console.log('Fs');
    
// }

// const changeText = function(){

// document.querySelector('h1').innerHTML
// = "best JS series"
// }
//  const changeMe = setTimeout(changeText,2000)

 

//  document.querySelector('#stop').addEventListener('click',function(){
//     clearTimeout(changeMe)
//     console.log("STOPPED");
    
//  })

//  Set Interval

// setInterval(function(){
//     console.log('fs',Date.now());
    
// },1000)

// const sayDate = function(str){
//     console.log(str, Date.now());
    
// }

// setInterval(sayDate,1000,"hi")

// clearInterval(intervalID)

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let intervalID;
const startChangingColor = function(){
    if(!intervalID){
        intervalID = setInterval(changeBgColor,1000)
    }
    
    function  changeBgColor() {
    document.body.style.backgroundColor = randomColor();
 }
};

const stopChangingColor = function(){
    clearInterval(intervalID);
    intervalID = null;
}

document.querySelector('#start').addEventListener
('click',startChangingColor) 

document.querySelector('#stop').addEventListener
('click',stopChangingColor) 


