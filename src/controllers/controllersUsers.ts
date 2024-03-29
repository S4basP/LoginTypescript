import { RequestHandler } from "express-serve-static-core";
import { pool } from "../database/db";
import bcrypt from "bcryptjs";

export const createUser: RequestHandler = async (req, res) => {
  const salt = await bcrypt.genSalt(5);
  const hashPass = await bcrypt.hash(req.body.pass, salt);

  let { name, email, pass } = req.body;

  pass = hashPass;

  try {
    await pool.query(
      "insert into user ( name, email, pass )value ( ?, ?, ?);",
      [name, email, pass]
    );

    res.status(200).json({ message: "Added User" });
  } catch (error) {
    res.status(500).json({ message: `Can´t registrer user ${error}` });
  }
};

export const consultedUserCopi: RequestHandler = async (req, res) => {
  console.log(req.body.email);
  try {
    const [rows]: any = await pool.query(
      "select email from user where email = ?;",
      [req.body.email]
    );
    if (rows <= 0) {
      return res.json({ userFound: false });
    }
    if (rows[0].email === req.body.email) {
      return res.json({ userFound: true });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error connection database: ${error}` });
  }
};

export const loginAutentication: RequestHandler = async (req, res) => {
  const salt = await bcrypt.genSalt(5);
  const hashPass = await bcrypt.hash(req.body.pass, salt);
  const pass: string = hashPass; 
  console.log(req.body);

  try {
    const [rows]: any = await pool.query(
      "select email, pass from user where email = ?",
      [req.body.email]
    );
      const comparation = await bcrypt.compare(req.body.pass, rows[0].pass)
      console.log(comparation);
      if(comparation === true ) return res.status(200).json({
        userValidation: true
      });
      else return res.status(200).json({
        userValidation: false
      })


  } catch (error) {
    return res.status(500).json({
      message: `Error to connection database: ${error}`,
    });
  }
};
