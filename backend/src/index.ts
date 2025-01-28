import * as dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import connectDB from "./Models/db";
import cors from "cors";
import bodyParser from "body-parser";
import authRouter from "./Routes/AuthRouter";
import productRouter from "./Routes/ProductRouter";
const PORT = process.env.PORT || 8000;

const checkEnvVariables = () => {
  const requiredEnvVars = ["JWT_SECRET", "MONGO_CONN"];
  requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
      throw new Error(`${varName} must be defined`);
    }
  });
};

checkEnvVariables();

const app = express();
app.use(bodyParser.json());
app.use(cors());

async function main() {
  await connectDB();
}

main().catch(console.error);

// Use routes
app.use("/api/auth", authRouter);

app.use("/api/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
