
import { validationLogin } from "./serverResp.js";
import { cleanDataForm, cleanDataFormLogin, getDataInputs, getInpLogin  } from "./subtracData.js";

const btnLogin = document.getElementById('btnLogin');


btnLogin.addEventListener('click', (event) => {
 event.preventDefault();
 const user = getInpLogin();
 console.log(user);
 validationLogin(user);
 cleanDataFormLogin();
});