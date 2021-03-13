#### Ejemplo despliegue Beanstalk

A continuación se detallan los pasos a seguir para desplegar de una aplicación Node.js sencilla utilizando el servicio AWS Beanstalk

#### AWS Beanstalk

AWS Elastic Beanstalk es un servicio para desplegar aplicaciones web desarrollados con Java, .NET, PHP, Node.js, Python, Ruby, Go y Docker.

Solo se debe cargar el código y Elastic Beanstalk administra de manera automática el despliegue, desde el aprovisionamiento de la capacidad, balanceadores de carga, escalado automático y hasta la monitorización del estado de la aplicación. Al mismo tiempo, se tiene el control de los recursos de AWS que son utilizados por la aplicación pudiendo acceder a los recursos subyacentes.

1. Ingresar a la consola de AWS a través del sitio AWS Educate
2. Seleccionar el servicio "Elastic Beanstalk"

<img width="883" alt="beanstalk-step-1" src="https://user-images.githubusercontent.com/17788257/111040637-a9eb9b00-8412-11eb-9db5-211e4079bafc.png">

3. Hacer click en "Create Application"

<img width="281" alt="beanstalk-step-2" src="https://user-images.githubusercontent.com/17788257/111040643-af48e580-8412-11eb-9945-a76c356adf54.png">


4. Ingresar un nombre de aplicación, ejemplo "test-node-beanstalk"

<img width="943" alt="beanstalk-step-3" src="https://user-images.githubusercontent.com/17788257/111040644-b3750300-8412-11eb-8f94-cb84ee343474.png">


5. Seleccionar como plataforma a "Docker". Para esto nuestra aplicación tiene que tener definido un *Dockerfile*

<img width="924" alt="beanstalk-step-4" src="https://user-images.githubusercontent.com/17788257/111040648-b7088a00-8412-11eb-8465-76f85cc3d857.png">


6. Seleccionar "Upload your code"

<img width="922" alt="beanstalk-step-5" src="https://user-images.githubusercontent.com/17788257/111040649-ba037a80-8412-11eb-806b-67358e0a72d0.png">


7. Seleccionar "Local file" y hacer click en "Choose file"

<img width="920" alt="beanstalk-step-6" src="https://user-images.githubusercontent.com/17788257/111040653-bec82e80-8412-11eb-97d4-1f74e9f55497.png">

**IMPORTANTE:** Para subir el código debemos generar un archivo *.zip* donde el *Dockerfile* debe estar ubicado en la raiz del archivo a comprimir. Osea, que va para zippear, tengo que seleccionar TODOS los archivos y comprimirlos, no comprimir la carpeta porque entonces en el root path va a haber una carpeta y no los archivos directamente.

8. Hacer click en "Create application"

<img width="513" alt="beanstalk-step-7" src="https://user-images.githubusercontent.com/17788257/111040656-c2f44c00-8412-11eb-8eca-fc4f8b4f3e7b.png">


9. Una vez lanzado el proceso de creación tenemos que aguardar alrededor de 5 minutos

<img width="1047" alt="beanstalk-step-8" src="https://user-images.githubusercontent.com/17788257/111040658-c556a600-8412-11eb-8ec7-b294259ca2d1.png">


10. Finalmente hacer click en la URL disponible para acceder a la aplicación desplegada

<img width="1065" alt="beanstalk-step-9" src="https://user-images.githubusercontent.com/17788257/111040663-c8519680-8412-11eb-869f-eb2b084e66f6.png">

