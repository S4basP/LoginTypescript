export const validationUser = async (user) => {
  try {
    const rep = await axios({
      method: "get",
      url: "http://localhost:3000/consultedUserCopi",
      data: { email: user.email },
    });

    return rep.data.userFound;
  } catch (error) {
    console.log("can´t conect to server");
    return error;
  }
};

export const createUser = async (user) => {
   if(validationUser( user === false )) {
    try {
        const res = await axios({
          method: "post",
          url: "http://localhost:3000/createUser",
          data: {
            name: user.name,
            email: user.email,
            pass: user.password,
          },
        });
        console.log(res);
      } catch (error) {
        console.log("Error send data: ", error);
      }
   } else if( validationUser === true ) {
     
   }
};
