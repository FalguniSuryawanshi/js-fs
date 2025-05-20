
let a = 300
if (true) {
    let a = 20
    const b = 30
    var c = 40

    console.log("inner:",a);
    

}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "fs"

    function two(){
        const website = "fs"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}
one()

if (true){
    const username = "falu"
    if(username === "falu"){
        const website = "youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
        
}
// console.log(username);



console.log(addone(3));
function addone(num){
    return num + 1
}

addtwo(5)
const addtwo = function(num){
    return num + 2
}

