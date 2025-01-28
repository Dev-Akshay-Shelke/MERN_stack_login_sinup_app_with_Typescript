import { Router } from "express";
import { authenticateJWT } from "../Middlewares/Auth";

const productRouter = Router();

productRouter.get("/", authenticateJWT, (req, res) => {
  console.log("---- logged in user detail ---");
  // Parse query parameters
  const { page = "1", limit = "10" } = req.query;
  const index = (+page - 1) * 10;
  const trimIndex = +limit * +page;
  console.log("INDEX", index);
  const productList = [
    {
      name: "mobile",
      price: 10000,
    },
    {
      name: "tv",
      price: 20000,
    },
    {
      name: "watch",
      price: 5000,
    },
    {
      name: "band",
      price: 20000,
    },
    {
      name: "mobile",
      price: 10000,
    },
    {
      name: "tv",
      price: 20000,
    },
    {
      name: "mobile",
      price: 10000,
    },
    {
      name: "tv",
      price: 20000,
    },
    {
      name: "mobile",
      price: 10000,
    },
    {
      name: "tv",
      price: 20000,
    },
    {
      name: "mobile",
      price: 10000,
    },
    {
      name: "tv",
      price: 20000,
    },
  ];
  res.status(200).json({
    list: productList.slice(index, trimIndex),
    total: productList.length,
  });
});

export default productRouter;
