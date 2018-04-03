export class User {
  constructor(public email: string,
              public name: string,
              private password: string) {}

  matches(another: User): boolean {
    return another !== undefined &&
           another.email === this.email &&
           another.password === this.password;
  }
}

export const users: {[key: string]: User} = {
  'test001@gmail.com': new User('test001@gmail.com', 'Test001', 'test12'),
  'test002@gmail.com': new User('test002@gmail.com', 'Test002', 'test21'),
  'andcrow25@gmail.com': new User('andcrow25@gmail.com', 'Andcrow', 'and123')
}
