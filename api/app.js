import express from "express";
import connectDB from "./config/ddbb.js";
import corsOptions from "./middlewares/cors.js";
import { router } from "./routes/index.js";

const app = express();

connectDB();

// middlewares
app.use(express.json());
app.use(corsOptions);

// rutas
app.get("/", (req, res) => {
  res.json({ message: "Escucha establecida" });
});

app.use(router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Shit, dog!" });
});

export default app;
