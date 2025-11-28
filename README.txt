HACER:
api express simple
base de datos mongo local: usuarios y grupos

(version mongodb-memory-server en ORIGINALddbb.js)

HECHA:
Conectar a mongo sin mas con mongoose, y usar el contenedor mongo definido en archivo yamal
dejar abiertos puertos "27017:27017"

hacer archivo Dockerfile (el EXPOSE 3000 es solo documentacion, el puerto real es el de yamal)

docker-compose up -d

testeo con thunderClient (ver archivo endpoints.txt)

// ejecutar mongodump dentro del contenedor y guardar el archivo en host
docker exec -i mongodb sh -c "mongodump --username root --password root --authenticationDatabase admin --archive" > ./mongo_backup.dump

    docker exec -i mongodb: Ejecuta comando dentro de contenedor mongodb.

    mongodump --username root --password root --authenticationDatabase admin --archive: Realiza un volcado de la base de datos en formato de archivo único, autenticandose con la base de datos admin

    > ./mongo_backup.dump: Redirige la salida del comando a archivo mongo_backup.dump en directorio actual

// restaurar desde un archivo backup a contenedor MongoDB
docker exec -i mongodb sh -c "mongorestore --username root --password root --authenticationDatabase admin --drop --archive" < ./mongo_backup.dump

    mongorestore ... --drop: Esta opcion elimina las colecciones existentes antes de restaurarlas, para evitar conflictos con datos presentes

    < ./mongo_backup.dump: Redirige el contenido del backup como entrada al comando mongorestore


dckr_pat_sIDJYA47iAO50bE3DxvGUXJQpdA (dcrtkn)