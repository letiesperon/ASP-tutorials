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
