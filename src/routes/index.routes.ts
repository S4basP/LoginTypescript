import { Router } from "express";
import { createUser } from '../controllers/controllersUsers';

const routers : Router = Router();


routers.get('/', ( req , res ) => {
    res.send("<h1>Hello World</h1>");
});

routers.post('/createUser', createUser);



export default routers;