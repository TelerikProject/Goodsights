import { validator } from './validator.js';

let User = (function() {
    class User {
        constructor(username, age, email, password) {
            this.username = username;
            this.age = age;
            this.email = email;
            this.password = password;
        }

        get username() {
            return this._username;
        }

        set username(value) {
            validator.validateIfUndefinedOrNull(value, "username");
            validator.validateTypeOf(value, "username", 'string');
            this._username = value;
        }

        get age() {
            return this._age;
        }

        set age(value) {
            validator.validateIfUndefinedOrNull(value, 'age');
            validator.validateTypeOf(value, 'age', 'number');
            this._age = value;
        }

        get email() {
            return this._email;
        }

        set email(value) {
            validator.validateIfUndefinedOrNull(value, "email");
            validator.validateTypeOf(value, "email", 'string');
            this._email = value;
        }

        get password() {
            return this._password;
        }

        set password(value) {
            this._password = value;
        }
    }

    return User;
})();

export { User };