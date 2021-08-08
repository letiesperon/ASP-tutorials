## Clase Docker Compose

**Queremos correr nuestra api en node con Docker, y usar la base de PostgreSQL tambien con docker.**

#### Punto 1:
Si corremos postgres con el comando `docker run` sin mas configuracion que esa, cuando apagamos y prendemos el container, los datos no existen mas.
Necesitamos algo que mapee los datos que guarda el container a datos de nuestra computadora, y los "monte" en el container cuando esta corriendo.

Docker volumes: https://docs.docker.com/storage/volumes/

#### Punto 2:
Como conectar la api en node que esta corriendo en un container independiente, con la base que esta en otro. Simplificando conceptos de virtualizacion y containerizacion, son dos ""maquinas"" diferentes.

Docker networks: https://docs.docker.com/network/

### Docker compose
https://docs.docker.com/compose/

Nos permite orquestrar y coordinar diferentes imagenes. Nos deja de manera declarativa definir redes, volumenes, y diferentes relaciones entre varias imagenes.

### Api + Base

Archivo `docker-compose.yml`

Corremos
`docker-compose build`
`docker-compose up`

### Multiples instancias de Api + Nginx + Base
Nginx: https://www.nginx.com/
Docker Scale, Docker Swarm: https://docs.docker.com/engine/reference/commandline/service_scale/

Archivo `docker-compose-with-nginx-scale.yml`
Configuracion Nginx: `nginx.conf`

Corremos
`docker-compose -f docker-compose-with-nginx-scale.yml build`
Para correr una instancia de la api
`docker-compose -f docker-compose-with-nginx-scale.yml up --scale`
Para correr N instancias de la api
`docker-compose -f docker-compose-with-nginx-scale.yml up --scale example-api=3`
