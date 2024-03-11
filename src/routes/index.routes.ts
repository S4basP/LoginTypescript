import { Router } from "express";
import { consultedUserCopi, createUser } from '../controllers/controllersUsers';
import { indexPage } from "../controllers/controller.files.public";

const routers : Router = Router();


routers.get('/', ( req , res ) => {
    res.send("<h1>Hello World</h1>");
});

routers.get('/singUp', indexPage);

routers.post('/createUser', createUser);

routers.get('/consultedUserCopi', consultedUserCopi);



export default routers;