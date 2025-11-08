HACER:
api express simple
base de datos mongo local: usuarios y grupos

mongodb-memory-server?

HECHA:
Conectar a mongo sin mas con mongoose, y usar el contenedor mongo definido en archivo yamal
dejar puertos "27017:27017" por si usamos compass

hacer archivo Dockerfile (el EXPOSE 3000 es solo documentacion, el puerto real es el de yamal)

docker-compose up -d

testeo con thunderClient (ver archivo endpoints.txt)