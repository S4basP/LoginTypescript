let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('pass'); 


export const getDataInputs = () => {
    return {
        name: name.value,
        email: email.value,
        password: password.value
    }
}

export const cleanDataForm = () => {
    name.value = "";
    email.value = "";
    password.value = "";
}

