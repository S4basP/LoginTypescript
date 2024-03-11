import { RequestHandler } from "express";
import path from "path";

export const indexPage : RequestHandler = ( req, res ) => {

    res.sendFile( path.join ( __dirname, '../public/Logeo/singUp.html') );
    
}