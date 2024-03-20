import { Router } from "express";
import { consultedUserCopi, createUser, loginAutentication } from '../controllers/controllersUsers';
import { indexPage, registrerUser } from "../controllers/controller.files.public";

const routers : Router = Router();


routers.get('/', indexPage)


routers.get('/singUpUser', registrerUser);

routers.post('/createUser', createUser);

routers.post('/consultedUserCopi', consultedUserCopi);

routers.post('/loginAutecation', loginAutentication);



export default routers;