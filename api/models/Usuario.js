import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
  nombre: {
            type: String
          },
  apellido1: {
            type: String
          },
  apellido2: {
            type: String
          },
  edad: {
            type: Number
          }
});


const Usuario = mongoose.model("Usuario", UsuarioSchema);

export default Usuario;