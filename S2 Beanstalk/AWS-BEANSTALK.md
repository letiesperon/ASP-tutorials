#### Ejemplo despliegue Beanstalk

A continuación se detallan los pasos a seguir para desplegar de una aplicación Node.js sencilla utilizando el servicio AWS Beanstalk

#### AWS Beanstalk

AWS Elastic Beanstalk es un servicio para desplegar aplicaciones web desarrollados con Java, .NET, PHP, Node.js, Python, Ruby, Go y Docker.

Solo se debe cargar el código y Elastic Beanstalk administra de manera automática el despliegue, desde el aprovisionamiento de la capacidad, balanceadores de carga, escalado automático y hasta la monitorización del estado de la aplicación. Al mismo tiempo, se tiene el control de los recursos de AWS que son utilizados por la aplicación pudiendo acceder a los recursos subyacentes.

1. Ingresar a la consola de AWS a través del sitio AWS Educate
2. Seleccionar el servicio "Elastic Beanstalk"

![Paso 1](img/beanstalk-step-1.png)

3. Hacer click en "Create Application"

![Paso 2](img/beanstalk-step-2.png)

4. Ingresar un nombre de aplicación, ejemplo "test-node-beanstalk"

![Paso 3](img/beanstalk-step-3.png)

5. Seleccionar como plataforma a "Docker". Para esto nuestra aplicación tiene que tener definido un *Dockerfile*

![Paso 4](img/beanstalk-step-4.png)

6. Seleccionar "Upload your code"

![Paso 5](img/beanstalk-step-5.png)

7. Seleccionar "Local file" y hacer click en "Choose file"

![Paso 6](img/beanstalk-step-6.png)

**Nota:** Para subir el código debemos generar un archivo *.zip* donde el *Dockerfile* debe estar ubicado en la raiz del archivo a comprimir.

8. Hacer click en "Create application"

![Paso 7](img/beanstalk-step-7.png)

9. Una vez lanzado el proceso de creación tenemos que aguardar alrededor de 5 minutos

![Paso 8](img/beanstalk-step-8.png)

10. Finalmente hacer click en la URL disponible para acceder a la aplicación desplegada

![Paso 9](img/beanstalk-step-9.png)
