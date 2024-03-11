

export const  validationUser = async (user) => {
    try {
        
        const rep = await axios({
            method: 'get',
            url: 'http://localhost:3000',
            data:{ email: user.email, }
        });
    }
    catch ( error ) {
        console.log("can´t conect to server");
    }


}