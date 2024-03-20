
import { validationLogin } from "./serverResp.js";
import { cleanDataForm, cleanDataFormLogin, getDataInputs, getInpLogin  } from "./subtracData.js";

 

const btnLogin = document.getElementById('btnLogin');
const btnRegistrer = document.getElementById('btnRegistrer');

btnLogin.addEventListener('click', (event) => {
 event.preventDefault();
 const user = getInpLogin();
 validationLogin(user);
 cleanDataFormLogin();
});


btnRegistrer.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "http://localhost:3000/singUpUser";
});