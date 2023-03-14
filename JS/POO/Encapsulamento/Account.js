class Account {
    #password;
    #balance = 0;
    constructor(user) {
        this.email = user.email;
        this.#password = user.password;
    }
    getBalance(email, password) {
        if (this.#authenticate(email, password)) {
            return this.#balance;
        }
    }
    #authenticate(email, password) {
        return this.email === email && this.#password == password;
    }
}

const user = {
    email: 'hraphael.albergaria@hotmail.com',
    password: '123456'
};

const myAccount = new Account(user);
console.log(myAccount);
const viewBalance = myAccount.getBalance(
    'hraphael.albergaria@hotmail.com',
    '123456'
);
console.log(viewBalance);
