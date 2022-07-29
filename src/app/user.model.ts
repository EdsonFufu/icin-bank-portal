export class User{
  username: string;
  email: string;
  password: string;
  account:string;
  roles: string[];
  constructor(username: string, email: string, password: string,account:string, roles: string[]) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.account = account;
    this.roles  = roles;
  }
}
