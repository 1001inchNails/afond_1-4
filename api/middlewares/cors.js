import cors from "cors";

const corsOptions = {
  origin: "*", // meter aqui dominio del front
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

export default cors(corsOptions);