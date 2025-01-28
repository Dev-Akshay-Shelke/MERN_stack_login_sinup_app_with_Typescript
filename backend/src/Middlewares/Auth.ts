import jwt from "jsonwebtoken";

// Middleware
export const authenticateJWT = (req: any, res: any, next: any) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return res
      .sendStatus(401)
      .json({ message: "Unauthorized, JWT token is require" });
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decode;
    next();
  } catch (err) {
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT token wrong or expired" });
  }
};
