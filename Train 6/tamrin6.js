import row from './users.js';

const tableBody = document.getElementById('tableBody');

const codeState = {
    counter: 0,
    flag: false
}

var HTML_string = "";

class User{
    id;
    username;
    email;
    phone;
    age;

    constructor(
        id,
        username,
        email,
        phone,
        age,
    ){
        this.id = id;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.age = age;
    }
    createRow = () => {
        return `<tr class="row">
                    <td>${this.id}</td>
                    <td>${this.username}</td>
                    <td>${this.email}</td>
                    <td>${this.phone}</td>
                    <td>${this.age}</td>
                </tr>`;
    }
    show = () => {
        HTML_string += this.createRow();
    }
}

document.querySelector('.btn').addEventListener('click',()=>{
    if (codeState.flag) {
        alert('All User Printed')
    } else {
        const createNewUser = new User(
            row[codeState.counter].id,
            row[codeState.counter].username,
            row[codeState.counter].email,
            row[codeState.counter].phone,
            row[codeState.counter].age,
        );
        createNewUser.show();
        codeState.counter += 1;
        if (codeState.counter == row.length) {
            codeState.flag = true;
        }
        tableBody.innerHTML = HTML_string;
    }
});