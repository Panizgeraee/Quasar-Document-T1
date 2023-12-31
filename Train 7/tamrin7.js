import User from "./module/user.mjs";
import Component from "./module/component.mjs";

const body = document.getElementById("app");

User.checkState().then((value) => {
  if (value?.length > 0) {
    if (document.querySelector(".login")) {
      Component.changeDisplay(".login", "none");
    } else {
      body.appendChild(Component.dashboardComponent());
    }
  } else {
    body.appendChild(Component.loginComponent());
    const loginBtn = document.querySelector("#login-btn");
    loginBtn.addEventListener("click", () => {
      const emailValue = document.getElementById("email").value;
      const passwordValue = document.getElementById("password").value;
      if (emailValue.length > 0 && passwordValue.length > 0) {
        const guestUser = new User(emailValue, passwordValue);
        const result = guestUser.login(guestUser.email, guestUser.password);
        if (result) {
          guestUser.login_state = true;
          localStorage.setItem("login_state", "true");
          Component.changeDisplay(".login", "none");
          body.appendChild(Component.dashboardComponent());
        }
      }
    });
  }
});
