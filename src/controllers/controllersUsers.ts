import { RequestHandler } from "express-serve-static-core";
import { pool } from "../database/db";
import bcrypt from "bcryptjs";



export const createUser: RequestHandler = async (req, res) => {
  const salt = await bcrypt.genSalt(5);
  const hashPass = await bcrypt.hash(req.body.pass, salt);

  console.log(hashPass.length);
  let {
    name,
    brithdate,
    email,
    pass
  } = req.body;

  pass = hashPass; 

  try {
    await pool.query(
      "insert into user (name, brithdate, email, pass )value ( ?, ?, ?, ?);",
      [name, brithdate, email, pass]
    );

    res.status(200).json({ message: "Added User" });
  } catch (error) {
    res.status(500).json({ message: `Can´t registrer user ${error}` });
  }

};



export const userAutentication : RequestHandler = ( req, res ) => {
    
}
