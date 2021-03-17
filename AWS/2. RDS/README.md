### Práctico

**Tiempo aproximado: 5 minutos**

Amazon Relational Database Service es un servicio de base de datos relacional distribuida de Amazon Web Services.

En este práctico vamos a crear una base de datos Postgres y acceder a ella usando psql desde nuestra compu local.

1. Ir a la consola de AWS y buscar el servicio RDS.
2. Clicker en "Create Database".
3. Elegir la opción "Standard Create" ya que vamos a tener que editar alguna configuración para poder accederla desde casa.
4. Elegir PostgreSQL.

![Screen Shot 2021-03-14 at 17 02 01](https://user-images.githubusercontent.com/17788257/111082660-4e8bdc80-84e8-11eb-8446-77dd51d318ec.png)

5. Elegir el free tier (la instancia será db.t2.micro).
6. En este ejemplo, como `DB cluster identifier` vamos a usar `database-3`.
7. En este ejemplo, como `Master username` vamos a usar `postgres`.
8. En este ejemplo, como `Master password` vamos a usar `password`.

![Screen Shot 2021-03-14 at 17 02 19](https://user-images.githubusercontent.com/17788257/111082670-53e92700-84e8-11eb-992e-82eaa17b749e.png)

9. Seleccionar `YES` en la opción de `Public access`. Esto es lo que nos va a permitir conectarnos desde otra instancia que no forme parte de la VPC.
10. En este ejemplo vamos a utilizar la default VPC con el default security group.

![Screen Shot 2021-03-14 at 17 14 46](https://user-images.githubusercontent.com/17788257/111082796-e689c600-84e8-11eb-9ed6-1291272d9f2c.png)


11. Confirmar.
12. Vamos a editar las reglas del Security group, ya que por defecto, el default security group solo permite tráfico entrante desde otros recursos en el Security group, y nosotros nos queremos conectar desde afuera. Para eso vamos a la nueva base de datos/ tab de "Connectivity & Security" y clickeamos en el security group. Luego buscar el botón de editar las reglas, y permitimos Inboud traffic desde `Everywhere`.
![Screen Shot 2021-03-14 at 17 05 37](https://user-images.githubusercontent.com/17788257/111082677-59df0800-84e8-11eb-8b2b-5d270af5da6d.png)

13. Una vez que la base termine de crearse, deberíamos ver en la tab de "Connectivity & Security" un `Endpoint` y puerto para conectarnos. Copiamos ese endpoint.
![Screen Shot 2021-03-14 at 17 11 58](https://user-images.githubusercontent.com/17788257/111082724-7aa75d80-84e8-11eb-9d46-ec063baafd5c.png)

14. Desde la consola local nos conectamos a través de psql (cliente Postgres), sustituyendo el `host` con el `endpoint` que copiamos en el paso anterior.
```bash
psql --host=database-3.cauqih9phppe.us-east-1.rds.amazonaws.com --port=5432 --username=postgres --password
```
(También podemos usar PgAdmin como interfaz gráfica.)
15. Nos va a pedir la password. Introducir `password`.
16. Deberíamos poder acceder a la base de datos. Probar hacer algo como
```
CREATE TABLE users (email string, name string);
```
17. No se olviden de borrarla cuando terminemos.
