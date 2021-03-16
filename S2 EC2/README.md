# Práctico EC2

**Tiempo aproximado: 5 minutos**

Amazon Elastic Compute Cloud es una parte central de la plataforma de cómputo en la nube de la empresa Amazon.com denominada Amazon Web Services. EC2 permite a los usuarios alquilar computadores virtuales en los cuales pueden ejecutar sus propias aplicaciones.

En este práctico vamos a crear una instancia y vamos a entrar por ssh a ella.

1. Ir a EC2 en la consola de AWS
![Screen Shot 2021-03-16 at 19 57 29](https://user-images.githubusercontent.com/17788257/111391794-16290180-8694-11eb-8b98-c2818949b0e3.png)

2. Hacer click en Instancias. Seleccionar "Lanzar instancias"
3. Seleccionar `Amazon Linux 2 AMI`
![Screen Shot 2021-03-16 at 19 59 42](https://user-images.githubusercontent.com/17788257/111391880-3b1d7480-8694-11eb-833d-11c8f923bff8.png)


4. Elegir el free tier `t2.micro`. Cuánta CPU y RAM tengo disponible?
5. Click en `Review and Launch`
6. Cuando me pida elegir un key pair, elegir `Create a new key pair`. Llamarle `test-key` y descargar la key.
![Screen Shot 2021-03-16 at 20 01 57](https://user-images.githubusercontent.com/17788257/111391821-217c2d00-8694-11eb-95e2-60745e25b3af.png)

7. Clickear "Launch Instances" y esperar a que la instancie cargue.
8. Examinar la instancia para tomar nota de su DNS público.
![Screen Shot 2021-03-16 at 20 04 52](https://user-images.githubusercontent.com/17788257/111391839-280aa480-8694-11eb-8d30-53463dbb60dd.png)

9. Ir a la terminal al directorio donde tengo la key y correr.
10. Poner la key privada.
```
chmod 400 test-key.pem
```
11. Utilizar el DNS público para acceder a la instancia. Ejemplo:
```
ssh -i leti-test1.pem ec2-user@ec2-54-159-255-77.compute-1.amazonaws.com
```

12. Estoy adentro de la instancia! Chusmear lo que hay (filesystem nuevito).

13. Hacer un ping a google y confirmar que funciona. Qué regla del security group de la instancia lo permite?
