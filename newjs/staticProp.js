class User{
    constructor(username){
        this.username = username

    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const fs = new User("fs")
// console.log(fs.createId());


class Teacher extends User {
    constructor (username, email){
        super(username)
        this.email = email

    }
}

const iphone = new Teacher("iphone", "ipho@ne")
console.log(iphone.createId());
