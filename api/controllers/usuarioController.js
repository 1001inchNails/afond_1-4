import { usuarioCreate, usuarioRead, usuarioUpdate, usuarioDelete, usuarioReadAll } from "../services/usuarioServices.js";

const createUsuario = async (req, res) => {
  try {
    let statusCode;
    const response = await usuarioCreate(req.body);

    if (response?.type !== "success") {
      statusCode = 400;
      console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
      res.status(statusCode).send(response);
    } else {
      statusCode = 201;
      console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
      res.status(statusCode).send(response);
    }
  } catch (error) {
    console.error("Error en createUsuario:", error);
    let statusCode = 500;
    console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
    res.status(statusCode).send({ type: "failure", message: "Error interno del servidor" });
  }
};

const readUsuario = async (req, res) => {
  try {
    let statusCode;
    const response = await usuarioRead(req.body);

    if (response?.type !== "success") {
      statusCode = 404;
      console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
      res.status(statusCode).send(response);
    } else {
      statusCode = 200;
      console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
      res.status(statusCode).send(response);
    }
  } catch (error) {
    console.error("Error en readUsuario:", error);
    let statusCode = 500;
    console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
    res.status(statusCode).send({ type: "failure", message: "Error interno del servidor" });
  }
};

const updateUsuario = async (req, res) => {
  try {
    let statusCode;
    const response = await usuarioUpdate(req.body);

    if (response?.type !== "success") {
      statusCode = 400;
      console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
      res.status(statusCode).send(response);
    } else {
      statusCode = 200;
      console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
      res.status(statusCode).send(response);
    }
  } catch (error) {
    console.error("Error en updateUsuario:", error);
    let statusCode = 500;
    console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
    res.status(statusCode).send({ type: "failure", message: "Error interno del servidor" });
  }
};

const deleteUsuario = async (req, res) => {
  try {
    let statusCode;
    const response = await usuarioDelete(req.body);

    if (response?.type !== "success") {
      statusCode = 400;
      console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
      res.status(statusCode).send(response);
    } else {
      statusCode = 200;
      console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
      res.status(statusCode).send(response);
    }
  } catch (error) {
    console.error("Error en deleteUsuario:", error);
    let statusCode = 500;
    console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
    res.status(statusCode).send({ type: "failure", message: "Error interno del servidor" });
  }
};

const readAllUsuarios = async (req, res) => {
  try {
    let statusCode;
    const response = await usuarioReadAll();

    if (response?.type !== "success") {
      statusCode = 404;
      console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
      res.status(statusCode).send(response);
    } else {
      statusCode = 200;
      console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
      res.status(statusCode).send(response);
    }
  } catch (error) {
    console.error("Error en readAllUsuarios:", error);
    let statusCode = 500;
    console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
    res.status(statusCode).send({ type: "failure", message: "Error interno del servidor" });
  }
};

export { createUsuario, readUsuario, updateUsuario, deleteUsuario, readAllUsuarios };