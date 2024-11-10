// LIBRARY
import express from "express";



// INIT
const router = express.Router();



// IMPORT CONTROLLERS
import { Wellcome } from "./src/wellcome/wellcome.controller.js";
import { Register, Login } from "./src/auth/auth.controller.js";
import { NotFound } from "./src/not_found/not_found.controller.js";



// ROUTES
router.get("/", Wellcome);
router.post("/register", Register);
router.post("/login", Login);
router.get("/*", NotFound);



// EXPORT
export default router;