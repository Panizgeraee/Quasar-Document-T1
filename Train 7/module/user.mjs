export default class User {
  email;
  password;
  login_state;

  acceptedEmail = ["hossein@gmail.com", "hossein@yahoo.com"];

  acceptedPassword = [123456, "123456"];

  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.login_state = false;
  }

  static async checkState() {
    let loginState = new Promise(function (resolve) {
      setTimeout(() => {
        resolve(localStorage.getItem("login_state"));
      }, 3000);
    });
    return await loginState;
  }

  login(email, password) {
    if (this.acceptedEmail.includes(email)) {
      if (this.acceptedPassword.includes(password)) {
        return true;
      } else return false;
    } else return false;
  }
}
