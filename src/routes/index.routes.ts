import { Router } from "express";
import { consultedUserCopi, createUser, loginAutentication } from '../controllers/controllersUsers';
import { indexPage } from "../controllers/controller.files.public";

const routers : Router = Router();


routers.get('/', ( req , res ) => {
    res.send("<h1>Hello World</h1>");
});

routers.get('/singUp', indexPage);

routers.post('/createUser', createUser);

routers.post('/consultedUserCopi', consultedUserCopi);

routers.post('/loginAutecation', loginAutentication);



export default routers;