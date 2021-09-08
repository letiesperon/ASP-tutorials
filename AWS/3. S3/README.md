## Práctico

Amazon S3 o Amazon Simple Storage Service es un servicio ofrecido por Amazon Web Services que proporciona almacenamiento de objetos a través de una interfaz de servicio web.

**Tiempo aproximado: 15 minutos**

En este práctico vamos a ver cómo crear un bucket y subir un objecto para entender sobre las políticas de visibilidad del bucket.
Por otro lado, vamos a ver cómo hostear un frontend en S3

### Parte A: Subir una imagen pública en un bucket

1. Descargar una foto de un panda de Google
2. Crear un bucket y subila ahí
3. Intentar acceder en modo incógnito (o en otro browser donde no estés logueando en AWS)
4. Hacer las configuraciones necesarias al bucket y al objeto para que puedas accederla en modo incógnito (osea, que sea pública)

---

### Parte B: Hostear una página web estática (con React js) en un bucket

1. Descargar `gatito-react-app`.

2. Hacer cd al directorio y correr `yarn install` y luego `yarn build`. Debería haber generado una carpeta `build`.

3. Ir a S3. Clicker en "Create Bucket".

4. Elegir un nombre de bucket (tiene que ser único). Para el ejemplo yo voy a usar `gatito-react-app-leti`.

5. Desclickear "Block all public access"
![Screen Shot 2021-03-17 at 19 12 27](https://user-images.githubusercontent.com/17788257/111546603-afb8e780-8756-11eb-92e0-662f98c023c6.png)


6. Click en "Create bucket". Va a pedirte chequear un box avisando que el bucket va a quedar público.


7. Ir al bucket creado y en "Properties" tomar nota del ARN (nombre del recurso). En mi caso es `arn:aws:s3:::gatito-react-app-leti`.
![Screen Shot 2021-03-17 at 19 30 19](https://user-images.githubusercontent.com/17788257/111547054-5ac9a100-8757-11eb-84b2-d5e6cf62a178.png)


8. Ir a "Permissions". Editar la policy para que sea la (sustituyendo tu ARN):
```
{
  "Version": "2012-10-17",
  "Id": "MyPolicy",
  "Statement": [
    {
      "Sid": "PublicReadForGetBucketObjects",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::gatito-react-app-leti/*"
    }
  ]
}
```


9. Ir a "Objects". Click en "Upload".


10. Usar el "Drag and drop" para subir TODO el contenido dentro la carpeta `build` que se generó cuando hicimos `yarn build` (incluida la carpeta `static`) y guardamos.
![Screen Shot 2021-03-17 at 19 19 59](https://user-images.githubusercontent.com/17788257/111546731-e3940d00-8756-11eb-912e-b2e36b46fa26.png)

11. Cuando haya terminado de subir, le damos "Close".


12. En "Properties", scrolleamos para abajo a donde dice "Static website hosting" y le damos "Edit".


13. Elegimos "Enable" y seleccionamos `index.html` y salvamos.
![Screen Shot 2021-03-17 at 19 21 46](https://user-images.githubusercontent.com/17788257/111546683-ceb77980-8756-11eb-9cae-445e16530273.png)


14. Ahora en "Properties", abajo del todo nos debería aparecer la url de nuestra página.
![Screen Shot 2021-03-17 at 19 22 16](https://user-images.githubusercontent.com/17788257/111546709-da0aa500-8756-11eb-8815-8b00b56df6ff.png)


15. Si lo clickeamos, deberíamos ver a nuestro gatito!

---

**Nota Sobre el routing:**
En las SPAs (como React), el routing no es como una página tradicional donde según el path de la url, qué archivo html va a buscar y servir. En las SPAs hay solo una página (index.html) donde se inyecta el contenido que corresponda a través del javascript. Por tanto, todo path debería ir al index.html, y después en la app misma se configura el "routeo virtual" para que lea el path de la url y muestre el contenido que corresponda. En react hay una librería para esto que es react router por ejemplo. 
TLDR: En S3 tanto en "index document" como en "error document" tienen que poner "index.html". La app tiene que tener la lógica de ruteo y la vista de 404 not found si el path es inválido. 

---

[Otro tutorial](https://www.ryanjyost.com/create-s3-bucket-manually/)

**Por qué es conveniente hacer esto en lugar de usar Elastic Beanstalk u otro servicio?**

---
[Precios S3](https://aws.amazon.com/es/getting-started/hands-on/host-static-website/services-costs/)

---

