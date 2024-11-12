// LIBRARY
import express from "express";
import cors from "cors";
import dotenv from "dotenv";


// OTHERS
import ApiRouter from "./api.js";



// INIT
dotenv.config();
const app = express();



// GLOBAL MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// ROUTES
app.use(ApiRouter);



// CONSTANT SERVER LISTEN
const NAME = process.env.APP_NAME || "Backend";
const PORT = process.env.APP_PORT || 5000;
const HOST = process.env.APP_HOST || "localhost";



// SERVER
app.listen(PORT, () => {
    console.log(`${NAME} running on http://${HOST}:${PORT}`);
});