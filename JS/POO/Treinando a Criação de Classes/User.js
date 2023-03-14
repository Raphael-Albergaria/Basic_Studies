class User {
    constructor(fullName, email, password) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }
    login(email, password) {
        if (this.email === email && this.password === password)
            console.log('Login bem sucedido');
        else console.log('Email ou senha incorretos');
    }
}
