import { grupoCreate, grupoRead, grupoUpdate, grupoDelete, grupoReadAll } from "../services/grupoServices.js";

const createGrupo = async (req, res) => {
  try {
    let statusCode;
    const response = await grupoCreate(req.body);

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
    console.error("Error en createGrupo:", error);
    let statusCode = 500;
    console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
    res.status(statusCode).send({ type: "failure", message: "Error interno del servidor" });
  }
};

const readGrupo = async (req, res) => {
  try {
    let statusCode;
    const response = await grupoRead(req.body);

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
    console.error("Error en readGrupo:", error);
    let statusCode = 500;
    console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
    res.status(statusCode).send({ type: "failure", message: "Error interno del servidor" });
  }
};

const updateGrupo = async (req, res) => {
  try {
    let statusCode;
    const response = await grupoUpdate(req.body);

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
    console.error("Error en updateGrupo:", error);
    let statusCode = 500;
    console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
    res.status(statusCode).send({ type: "failure", message: "Error interno del servidor" });
  }
};

const deleteGrupo = async (req, res) => {
  try {
    let statusCode;
    const response = await grupoDelete(req.body);

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
    console.error("Error en deleteGrupo:", error);
    let statusCode = 500;
    console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
    res.status(statusCode).send({ type: "failure", message: "Error interno del servidor" });
  }
};

const readAllGrupos = async (req, res) => {
  try {
    let statusCode;
    const response = await grupoReadAll();

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
    console.error("Error en readAllGrupos:", error);
    let statusCode = 500;
    console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
    res.status(statusCode).send({ type: "failure", message: "Error interno del servidor" });
  }
};

export { createGrupo, readGrupo, updateGrupo, deleteGrupo, readAllGrupos };