### Práctico Docker Compose

En la carpeta tasks-api tenemos una **API REST** hecha en **NodeJS** con el framework **Express** que se comunica con una base de datos **Postgres**. 

*La app levanta en el puerto **3456**.* 
*Postgres por defecto levanta en el **5432**.*

---

### Parte A: Lograr levantar el sistema con un docker-compose básico

1. Crear un archivo `docker-compose.yml` con lo mínimo imprescindible para poder levantar la aplicación y su base de datos:
* Declarar el servicio `tasks-api` y `tasks-db` que se construya a partir del Dockerfile dado. 
* Declarar el servicio `tasks-db` que se contruya a partir de una imagen pre-existente de postgres.
* Configurar el port mapping necesario.
* Configurar en el `docker-compose.yml` la variable de entorno `DATABASE_URL` para que la aplicación se conecte con la bdd correctamente cuando levantamos con `docker-compose up`. 

Una vez arriba el sistema:
* Correr `docker network ls` para ver la network *bridge* que se creó automáticamente sin necesidad de que declaremos una en el `docker-compose.yml`. 
* Observar que los contenedores están conectados a esa network corriendo `docker network inspect tasks-api_default`.

---

### Parte B: Hacerlo más confiable y robusto

1. Agregar la keyword `depends_on` para que el contenedor de la app espere a que el contenedor de la bdd esté creado. 
2. Usar el script **"wait_for_it.sh"** para asegurar que la app se levante una vez que la base esté corriendo y listo para aceptar conexiones. 
Para eso:
  a. Descargar el archivo de acá y ponerlo en la carpeta al mismo nivel que el docker-compose.yml. 
  b. Cambiar el comando de startup para que en lugar de `["node", "index.js"]` sea `["./wait_for_it.sh", "tasks-db:5432", "--", "node", "index.js"]]`

---

### Parte C: Hacerlo más ameno para usarlo en el día a día

3. Declarar los volúmenes necesarios para **persistir** los datos en la bdd aunque destruya y levante un nuevo contenedor de la bdd. 
4. Hacer que funcione el **live reload**. O sea, que pueda hacer cambios, salvar y al hacer refresh de la página los pueda ver directamente sin tener que hacer `docker-compose down` y `docker-compose up --build` .
