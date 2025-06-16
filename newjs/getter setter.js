// class User {
//     constructor(email, password){
//         this.email = email;
    
//         this.password = password;
        

        
//     }

// }

// const fs = new User("fs@.ai","123")
// console.log(fs.password);


// 
const User = {
    _email: 'faluu.com',
    _password: "abc",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
}

const tea = Object.create(User);

console.log(tea.email);     // Output: "FALUU.COM"

tea.email = "hello@chat.com";
console.log(tea.email);     // Output: "HELLO@CHAT.COM"
