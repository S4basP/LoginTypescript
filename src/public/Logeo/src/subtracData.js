export const modal = document.querySelector("#modal");

export const getDataInputs = () => {
    return {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('pass').value
    }
}
export const getInpLogin = () => {
    return {
        email: document.getElementById('email').value,
        password: document.getElementById('pass').value
    }
}

export const cleanDataForm = () => {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('pass').value = "";
}


export const cleanDataFormLogin = () =>{
    document.getElementById('email').value = "";
    document.getElementById('pass').value = "";
}

