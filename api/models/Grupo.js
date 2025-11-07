import mongoose from "mongoose";

const GrupoSchema = new mongoose.Schema({
  nombre: {
            type: String
          },
  descripcion: {
            type: String
          },
  activo: {
            type: Boolean
          }
});


const Grupo = mongoose.model("Grupo", GrupoSchema);

export default Grupo;