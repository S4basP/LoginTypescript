import { createUser, validationUser } from './serverResp.js';
import { cleanDataForm, getDataInputs } from './subtracData.js'

const submitDataForm = document.getElementById('submitDataForm');
const btnLogin = document.getElementById('btnLogin');




let user;
submitDataForm.addEventListener("click", async (e) => {
 user = getDataInputs();
 validationUser( user ).then( res => {
    if ( res === false ) {
        createUser( user );
        window.location.href = "http://localhost:3000/";
    } else {
        alert("user has already registered")
    }
 });
 cleanDataForm();
 

});

btnLogin.addEventListener("click", ( event ) => {

    event.preventDefault();
    window.location.href = "http://localhost:3000/";
    console.log("Se ha precionado el boton login");
});


