# Práctico Beanstalk y CodePipeline

**Tiempo aproximado: 20 minutos**

AWS CodePipeline es un servicio de entrega continua completamente administrado que permite automatizar tus workflows. Se integra con varios tipos de repositorios (Github, AWS Code Commit, AWS S3) y puede desplegar a varios servicios, por ejemplo ElasticBeanstalk.

En este práctico vamos a hacer un pipeline simple, que lea de un repositorio privado en Github y actualice una app en Elastic Beanstalk cada vez que se hace commit a master (Github Flow).

### Parte 1. Crear aplicación en Elastic Beanstalk

1. Vamos a Elastic Beanstalk y creamos una aplicación con plataforma **Docker**. Elejimos usar una "Sample application" (no subas ningún zip).

### Parte 2. Preparar código fuente

1. Hacer fork, clonar, o crear tu repo propio que utilice Docker y sin base de datos para este ejemplo (porque no vamos a ver aún cómo hacer builds complejos que requieran por ejemplo ejecutar migraciones). Para el ejemplo uso [node-app-static](https://github.com/letiesperon/node-app-static).

#### Parte 3. Armar pipeline en CodePipeline

1. Ir a servicios y buscar **CodePipeline**.

2. Hacer click en "Crear Pipeline"
![Screen Shot 2021-03-23 at 09 45 56](https://user-images.githubusercontent.com/17788257/112151597-2ecb7700-8bc0-11eb-8e90-a3574ee81eb1.png)

3. Elegir un nombre para el Pipeline (no se puede cambiar después)
![Screen Shot 2021-03-23 at 09 47 05](https://user-images.githubusercontent.com/17788257/112151615-33902b00-8bc0-11eb-95bf-54eda2933a61.png)

4. En el segundo paso, sobre el **Source Stage** elegir **Github v1** (el v2 es mejor, pero AWS Educate no nos deja). 

5. Autorizar github en la pestaña que se abre. 
6. Elegir el repositorio y la rama `master` (o `main` si es un repo de los nuevos)
![Screen Shot 2021-03-23 at 09 50 48](https://user-images.githubusercontent.com/17788257/112152065-a5687480-8bc0-11eb-8394-a61607cd9825.png)

7. Darle **Skip stage** al **Build Stage**. Este paso es lo que precisaríamos para hacer algo como compilar el código, correr migraciones, chequear que las pruebas corran, etc. No lo vamos a ver en este ejemplo. 

8. En **Deploy stage** configurar **Elastic Beanstalk** y elegir la aplicación que acabamos de crear en el paso 1. 
![Screen Shot 2021-03-23 at 09 54 15](https://user-images.githubusercontent.com/17788257/112152139-b618ea80-8bc0-11eb-92f5-fd25bf4c0390.png)

9. Le damos finalizar y ahora deberíamos ver el Deploy "In Progress" 
![Screen Shot 2021-03-23 at 09 55 33](https://user-images.githubusercontent.com/17788257/112152609-3b040400-8bc1-11eb-8e13-071183ac651a.png)

10. Cuando finalice vamos a nuestra app de Elastic Beanstalk y deberíamos ver que se desplegó nuestra app node. 
11. Probar hacer un commit en el repositorio y ver si los cambios se despliegan a la app automáticamente.
