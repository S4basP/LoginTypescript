export const validationUser = async (user) => {
  
  try {
    const {data} = await axios({
      method: "post",
      url: "http://localhost:3000/consultedUserCopi",
      data: {
        name: user.name,
        email: user.email,
        pass: user.pass
      }
    });
    
      return data.userFound
  } catch (error) { 
    console.log("can´t conect to server");
    return error;
  }
};

export const createUser = async (user) => {

    try {
        const res = await axios({
          method: "post",
          url: "http://localhost:3000/createUser",
          data: {
            name: user.name,
            email: user.email,
            pass: user.password,
          }
        });
        console.log(res);
      } catch (error) {
        console.log("Error send data: ", error);
      }

};

export const validationLogin = async ( user ) => {
  try {

    const { data } = await axios ({
      method: "post",
      url: "http://localhost:3000/loginAutecation",
      data: {
        email: user.email,
        pass: user.password
      }
    });

    if( data.userValidation === true ) alert('user valid');
    else alert('Email or password not valid');

    
    console.log(data);
  } catch ( error ) {
    console.log(`Error to connection server ${error}`);
  }
};
