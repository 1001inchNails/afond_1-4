import Grupo from "../models/Grupo.js";

const grupoCreate = async (data) => {
  try {
    if (!data) {
      return { type: "failure", message: "Error: No existen datos" };
    }

    let { nombre, descripcion, activo } = data;

    if (!nombre) {
      return { type: "failure", message: "Error: El nombre es requerido" };
    }

    const nuevoGrupo = new Grupo({
      nombre,
      descripcion: descripcion || "",
      activo: activo !== undefined ? activo : true
    });

    const savedGrupo = await nuevoGrupo.save();

    if (savedGrupo) {
      return {
        type: "success",
        message: "Grupo creado",
        data: savedGrupo
      };
    } else {
      return {
        type: "failure",
        message: "Grupo no creado"
      };
    }
  } catch (error) {
    return { type: "failure", message: `Error en proceso de creación: ${error.message}` };
  }
};

const grupoRead = async (data) => {
  try {
    if (!data) {
      return { type: "failure", message: "Error: No existen datos" };
    }

    let { filtroKey, filtroValue } = data;

    if (filtroKey === "_id") {
    }

    const grupo = await Grupo.findOne({ [filtroKey]: filtroValue });

    if (!grupo) {
      return { type: "failure", message: "Grupo no encontrado" };
    }

    return {
      type: "success",
      message: "Grupo encontrado",
      data: grupo
    };
  } catch (error) {
    return { type: "failure", message: `Error en proceso de búsqueda: ${error.message}` };
  }
};

const grupoUpdate = async (data) => {
  try {
    if (!data) {
      return { type: "failure", message: "Error: No existen datos" };
    }

    let { _id, nombre, descripcion, activo } = data;

    const updatedGrupo = await Grupo.findByIdAndUpdate(
      _id,
      {
        $set: {
          nombre,
          descripcion,
          activo
        },
      },
      { new: true, runValidators: true }
    );

    if (!updatedGrupo) {
      return { type: "failure", message: "Grupo no encontrado" };
    }

    return {
      type: "success",
      message: "Grupo actualizado",
      data: updatedGrupo
    };
  } catch (error) {
    return { type: "failure", message: `Error en proceso de actualización: ${error.message}` };
  }
};

const grupoDelete = async (data) => {
  try {
    if (!data) {
      return { type: "failure", message: "Error: No existen datos" };
    }

    let { _id } = data;

    const deletedGrupo = await Grupo.findByIdAndDelete(_id);

    if (!deletedGrupo) {
      return { type: "failure", message: "Grupo no encontrado" };
    }

    return {
      type: "success",
      message: "Grupo borrado",
      data: deletedGrupo
    };
  } catch (error) {
    return { type: "failure", message: `Error en proceso de borrado: ${error.message}` };
  }
};

const grupoReadAll = async () => {
  try {
    const grupos = await Grupo.find({});

    return {
      type: "success",
      message: "Grupos encontrados",
      data: grupos
    };
  } catch (error) {
    return { type: "failure", message: `Error en proceso de búsqueda: ${error.message}` };
  }
};

export { grupoCreate, grupoRead, grupoUpdate, grupoDelete, grupoReadAll };