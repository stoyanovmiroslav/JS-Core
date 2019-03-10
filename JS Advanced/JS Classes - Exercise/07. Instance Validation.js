class CheckingAccount{
    constructor(clientId, email, firstName, lastName ){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        const regex = /^\d{6}$/gm;
        if (regex.test(value)){
            this._clientId = value;
        } else{
            throw TypeError('Client ID must be a 6-digit number');
        }

    }

    get email() {
        return this._email;
    }

    set email(value) {
        const regex = /^[a-zA-z]+@[a-zA-z.]+$/gm;
        if (regex.test(value)){
            this._email = value;
        } else{
            throw TypeError('Invalid e-mail');
        }
    }

    get firstName() {
        return this.firstName;
    }

    set firstName(value) {
        const regexLength = /^.{3,20}$/gm;
        const regexLatinLetters = /^\w+$/gm;

        if (!regexLength.test(value)){
            throw TypeError('First name must be between 3 and 20 characters long');
        }

        if (!regexLatinLetters.test(value)){
            throw  TypeError('First name must contain only Latin characters');
        }

        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        const regexLength = /^.{3,20}$/gm;
        const regexLatinLetters = /^\w+$/gm;

        if (!regexLength.test(value)){
            throw TypeError('Last name must be between 3 and 20 characters long');
        }

        if (!regexLatinLetters.test(value)){
            throw  TypeError('Last name must contain only Latin characters');
        }
        this._lastName = value;
    }
}

new CheckingAccount('1234', 'ivan@some.com', 'Ivan', 'Petrov');