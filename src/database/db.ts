import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';
config();

export const pool = createPool( {
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    port: 3306,
    database: 'users'


}); 



/**
 *     host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.BD_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE

**/