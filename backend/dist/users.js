"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    'test001@gmail.com': new User('test001@gmail.com', 'Test001', 'test12'),
    'test002@gmail.com': new User('test002@gmail.com', 'Test002', 'test21'),
    'andcrow25@gmail.com': new User('andcrow25@gmail.com', 'Andcrow', 'and123')
};
