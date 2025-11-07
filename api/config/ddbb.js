import "dotenv/config";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

// conexion mongoose a bbdd
const connectDB = async () => {
  try {
    // instancia del servidor
    const mongod = await MongoMemoryServer.create();

    // URI de conexión
    const uri = mongod.getUri();
    console.log("MongoDB en memoria ejecutándose en:", uri);

    // conectar mongoose
    await mongoose.connect(uri);
    console.log("Mongoose conectado a la base de datos en memoria");
  } catch (err) {
    console.error("MongoDB error:", err);
    process.exit(1);
  }
};

export default connectDB;
