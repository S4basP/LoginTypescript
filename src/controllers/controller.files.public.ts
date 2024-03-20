import { RequestHandler } from "express";
import path from "path";

export const indexPage : RequestHandler = ( req, res ) => {

    res.sendFile( path.join ( __dirname, '../public/Logeo/index.html') );
    
}

export const registrerUser : RequestHandler = ( req, res ) => {
    res.sendFile( path.join( __dirname, '../public/Logeo/signUp.html'));
}