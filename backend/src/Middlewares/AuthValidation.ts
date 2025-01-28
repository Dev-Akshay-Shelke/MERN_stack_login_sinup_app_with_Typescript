import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { log } from "console";
interface IUserSignup {
  firstName: string;
  email: string;
  password: string;
}

interface IUserLogin {
  email: string;
  password: string;
}
export const validateSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const signupSchema = Joi.object({
      firstName: Joi.string().min(3).max(100).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(4).max(100).required(),
    });
    const value = await signupSchema.validateAsync(req.body);
    req.body = value as IUserSignup;
    next();
  } catch (error: any) {
    log(error);
    res.status(400).json({ message: "Bad request", error });
  }
};

export const validateLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const loginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(4).max(100).required(),
    });
    const value = await loginSchema.validateAsync(req.body);
    req.body = value as IUserLogin;
    next();
  } catch (error: any) {
    res.status(400).json({ message: "Bad request", error });
  }
};
