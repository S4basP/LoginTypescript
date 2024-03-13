import { createUser, validationUser } from './serverResp.js';
import { cleanDataForm, getDataInputs } from './subtracData.js'

const submitDataForm = document.getElementById('submitDataForm');
let user;
submitDataForm.addEventListener("click", async (e) => {
 user = getDataInputs();
 validationUser( user ).then( res => {
    if ( res === false ) {
        createUser( user );
    } else {
        alert("user has already registered")
    }
 });
 cleanDataForm();
  

});