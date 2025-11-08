import "dotenv/config";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // instancia de servidor
    const mongod = await MongoMemoryServer.create();

    const uri = mongod.getUri();
    console.log("MongoDB en memoria ejecutándose en:", uri);

    await mongoose.connect(uri);
    console.log("Mongoose conectado a la base de datos en memoria");
  } catch (err) {
    console.error("MongoDB error:", err);
    process.exit(1);
  }
};

export default connectDB;
