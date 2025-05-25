const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "sift by app"
}

for (const key in myObject) {
//    console.log(`${key} is ${myObject[key]}`);
   
}

const programing = ["js", "cpp", "ruby", "java", "py" ]

for (const key in programing) {
    // console.log(programing[key]);
    
}

const map = new Map()

map.set('IN', "India")
map.set('Usa', "America")
map.set('FR', "France")

for (const key in map) {
    // console.log(map[key]);
    
    
}
// map does not able to iterate


//for each loop

const coding = ["js","py","ruby","java"]
// coding.forEach(function (item) {
//         console.log(item);
        
// })

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        laguagename: "javascript",
        languageFile: "js"
    },
    {
        laguagename: "python",
        languageFile: "py"
    },
    {
        laguagename: "java",
        languageFile: "java"
    },
]

myCoding.forEach( (item)=>{
    console.log(item.laguagename);
    
})