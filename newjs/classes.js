// // ES6

// class User {
//     constructor(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password

//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return`${this.username.toUpperCase()}`
//     }

// }

// const fs = new User("chai", "falu@123.com", "123")


// console.log(fs.encryptPassword());
// console.log(fs.changeUsername());


class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.logMe}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A New Course Was Added by User${this.username}`);

        
    }
}

const fs = new Teacher("chai", "chai@123", "124")

fs.logMe()

const nf  = new User("Masalachai")

nf.logMe()

console.log(fs === nf);

