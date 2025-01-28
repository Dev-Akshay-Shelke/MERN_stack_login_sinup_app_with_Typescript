import { Router } from "express";
import { validateLogin, validateSignup } from "../Middlewares/AuthValidation";
import { loginUser, signupUser } from "../Controllers/AuthController";

const authRouter = Router();

authRouter.post("/login", validateLogin, loginUser);

authRouter.post("/signup", validateSignup, signupUser);

export default authRouter;
