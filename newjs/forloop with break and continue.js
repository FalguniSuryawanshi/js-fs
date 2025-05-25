// iterators
// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log('5 is best number');
        
    }
    console.log(element);
      
}

for (let i = 0; i <= 10 ; i++) {
    console.log(`Outer Element : ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Element : ${j}`);
        console.log(i + '*' + j + '=' + i*j );
        
        
        
    }
    
    
}

let myArray = ["batman", "superman", "spiderman"];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
    
}

// break and continue

for (let index = 1; index <=20 ; index++) {
if (i=index == 5 ) {
    console.log('detected 5');
    continue    
}
        console.log(`Value of i is ${index}`);
    
    
}