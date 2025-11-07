import Usuario from "../models/Usuario.js";

const usuarioCreate = async (data) => {
  try {
    if (!data) {
      return { type: "failure", message: "Error: No existen datos" };
    }

    let { nombre, apellido1, apellido2, edad } = data;

    if (!nombre || !apellido1) {
      return { type: "failure", message: "Error: Nombre y apellido1 son requeridos" };
    }

    if (edad && (edad < 0 || edad > 150)) {
      return { type: "failure", message: "Error: Edad debe ser entre 0 y 150" };
    }

    const nuevoUsuario = new Usuario({
      nombre,
      apellido1,
      apellido2: apellido2 || "",
      edad: edad || null
    });

    const savedUsuario = await nuevoUsuario.save();

    if (savedUsuario) {
      return {
        type: "success",
        message: "Usuario creado",
        data: savedUsuario
      };
    } else {
      return {
        type: "failure",
        message: "Usuario no creado"
      };
    }
  } catch (error) {
    return { type: "failure", message: `Error en proceso de creación: ${error.message}` };
  }
};

const usuarioRead = async (data) => {
  try {
    if (!data) {
      return { type: "failure", message: "Error: No existen datos" };
    }

    let { filtroKey, filtroValue } = data;

    if (filtroKey === "edad") {
      filtroValue = Number(filtroValue);
    }

    const usuario = await Usuario.findOne({ [filtroKey]: filtroValue });

    if (!usuario) {
      return { type: "failure", message: "Usuario no encontrado" };
    }

    return {
      type: "success",
      message: "Usuario encontrado",
      data: usuario
    };
  } catch (error) {
    return { type: "failure", message: `Error en proceso de búsqueda: ${error.message}` };
  }
};

const usuarioUpdate = async (data) => {
  try {
    if (!data) {
      return { type: "failure", message: "Error: No existen datos" };
    }

    let { _id, nombre, apellido1, apellido2, edad } = data;

    const updatedUsuario = await Usuario.findByIdAndUpdate(
      _id,
      {
        $set: {
          nombre,
          apellido1,
          apellido2,
          edad
        },
      },
      { new: true, runValidators: true }
    );

    if (!updatedUsuario) {
      return { type: "failure", message: "Usuario no encontrado" };
    }

    return {
      type: "success",
      message: "Usuario actualizado",
      data: updatedUsuario
    };
  } catch (error) {
    return { type: "failure", message: `Error en proceso de actualización: ${error.message}` };
  }
};

const usuarioDelete = async (data) => {
  try {
    if (!data) {
      return { type: "failure", message: "Error: No existen datos" };
    }

    let { _id } = data;

    const deletedUsuario = await Usuario.findByIdAndDelete(_id);

    if (!deletedUsuario) {
      return { type: "failure", message: "Usuario no encontrado" };
    }

    return {
      type: "success",
      message: "Usuario borrado",
      data: deletedUsuario
    };
  } catch (error) {
    return { type: "failure", message: `Error en proceso de borrado: ${error.message}` };
  }
};

const usuarioReadAll = async () => {
  try {
    const usuarios = await Usuario.find({});

    return {
      type: "success",
      message: "Usuarios encontrados",
      data: usuarios
    };
  } catch (error) {
    return { type: "failure", message: `Error en proceso de búsqueda: ${error.message}` };
  }
};

export { usuarioCreate, usuarioRead, usuarioUpdate, usuarioDelete, usuarioReadAll };