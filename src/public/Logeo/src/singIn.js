import {name, email, password} from './subtracData.js'

const submitDataForm = document.getElementById('submitDataForm');

submitDataForm.addEventListener("click", async (e) => {
    e.preventDefault();
 
    try{

    const res = await axios({
        method: 'post',
        url: 'http://localhost:3000/createUser',
        data: {
            name: name,
            email: email,
            pass: password
        }
    });
    console.log(res);
    }catch (error)
    {
        console.log("Error send data: ", error);
    }


});