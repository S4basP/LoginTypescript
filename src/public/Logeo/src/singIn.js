import { validationUser } from './serverResp.js';
import { cleanDataForm, getDataInputs } from './subtracData.js'

const submitDataForm = document.getElementById('submitDataForm');
let user;
submitDataForm.addEventListener("click", async (e) => {
 user = getDataInputs();
 console.log(validationUser(user));
 cleanDataForm();
  

});