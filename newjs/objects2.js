// const tinderUser = new Object()
const tinderUser = {}
console.log(tinderUser);

tinderUser.id = "123"
tinderUser.name = "samu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUSer = {
    email: "sam@gmail.com",
    fullname: {
        Userfullname: {
            firstname: "falguni",
            lastname: "suryawanshi"

        }
    }
}

// console.log(regularUSer.fullname.Userfullname);

const obj1 = {1:"a",2:"b" }
const obj2 = {3:"a",4:"b" }

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id:1,
        email:"sam@gmail.com"
    },
    {
        id:1,
        email:"sam@gmail.com"
    },
  
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



