import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

// carga dinamica de todos los modelos mongoose
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const models = {};

// leer todos los archivos en directorio
const files = fs.readdirSync(__dirname).filter(file => 
  file !== 'index.js' && file.endsWith('.js')
);

// importar y regustrar todos los modelos
for (const file of files) {
  
  // quitar extension y sufijo "Model"
  let modelName = file.replace(/\.js$/i, '').replace(/Model$/i, '');
  // capitalizar nombre
  modelName = modelName.charAt(0).toUpperCase() + modelName.slice(1);
  const module = await import(`./${file}`);
  
  // chequear que el export sea un modelo mongoose
  if (module.default && mongoose.modelNames().includes(modelName)) {
    // si ya esta registrado, usarlo
    models[modelName] = mongoose.model(modelName);
  } else if (module.default) {
    // registrar modelo
    models[modelName] = module.default;
  }
}

export default models;