export default class Component {
  static loginComponent = () => {
    const article = document.createElement("article");
    article.setAttribute("class", "login");

    const section = document.createElement("section");
    section.setAttribute("class", "login-box");

    const email = document.createElement("input");
    email.setAttribute("id", "email");
    email.setAttribute("type", "email");
    email.setAttribute("name", "email");
    email.setAttribute("placeholder", "Enter Your Email");

    const password = document.createElement("input");
    password.setAttribute("id", "password");
    password.setAttribute("type", "password");
    password.setAttribute("name", "password");
    password.setAttribute("placeholder", "Enter Your Password");

    const button = document.createElement("button");
    button.setAttribute("id", "login-btn");
    button.innerText = "Login";

    section.appendChild(email);
    section.appendChild(password);
    section.appendChild(button);

    article.appendChild(section);
    return article;
  };

  static changeDisplay = (selector, state) => {
    document.querySelector(selector).style.display = state;
  };

  static dashboardComponent = () => {
    const article = document.createElement("article");
    article.setAttribute("class", "dashboard");

    const h1 = document.createElement("h1");
    h1.innerText = "Complete Mission";
    article.appendChild(h1);

    return article;
  };
}
