# Práctico EC2

**Tiempo aproximado: 5 minutos**

Amazon Elastic Compute Cloud es una parte central de la plataforma de cómputo en la nube de la empresa Amazon.com denominada Amazon Web Services. EC2 permite a los usuarios alquilar computadores virtuales en los cuales pueden ejecutar sus propias aplicaciones.

En este práctico vamos a crear una instancia y vamos a entrar por ssh a ella.

1. Ir a EC2 en la consola de AWS
2. Hacer click en Instancias. Seleccionar "Lanzar instancias"
3. Seleccionar `Amazon Linux 2 AMI`
4. Elegir el free tier `t2.micro`. Cuánta CPU y RAM tengo disponible?
5. Click en `Review and Launch`
6. Cuando me pida elegir un key pair, elegir `Create a new key pair`. Llamarle `test-key` y descargar la key.
7. Clickear "Launch Instances" y esperar a que la instancie cargue.
8. Examinar la instancia para tomar nota de su DNS público.
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

13. Hacer un ping a google y confirmar que funciona. Qué regla del security group lo permite?
