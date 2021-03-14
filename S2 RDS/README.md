### Práctico

En este práctico vamos a crear una base de datos Postgres y acceder a ella usando psql desde nuestra compu local.

** Tiempo aproximado: 5 minutos**

1. Ir a la consola de AWS y buscar el servicio RDS.
2. Clicker en "Create Database".
3. Elegir la opción "Standard Create" ya que vamos a tener que editar alguna configuración para poder accederla desde casa.
4. Elegir PostgreSQL.
5. Elegir el free tier (la instancia será db.t2.micro).
6. En este ejemplo, como `DB cluster identifier` vamos a usar `database-3`.
7. En este ejemplo, como `Master username` vamos a usar `postgres`.
8. En este ejemplo, como `Master password` vamos a usar `password`.
9. Seleccionar `YES` en la opción de `Public access`. Esto es lo que nos va a permitir conectarnos desde otra instancia que no forme parte de la VPC.
10. En este ejemplo vamos a utilizar la default VPC con el default security group.
11. Confirmar.
11. Vamos a editar las reglas del Security group, ya que por defecto, el default security group solo permite tráfico entrante desde otros recursos en el Security group, y nosotros nos queremos conectar desde afuera. Para eso vamos a la nueva base de datos/ tab de "Connectivity & Security" y clickeamos en el security group. Luego buscar el botón de editar las reglas, y permitimos Inboud traffic desde `Everywhere`.
12. Una vez que la base termine de crearse, deberíamos ver en la tab de "Connectivity & Security" un `Endpoint` y puerto para conectarnos. Copiamos ese endpoint.
13. Desde la consola local nos conectamos a través de psql (cliente Postgres), sustituyendo el `host` con el `endpoint` que copiamos en el paso anterior.
```
psql --host=database-1.cauqih9phppe.us-east-1.rds.amazonaws.com --port=5432 --username=postgres --password
```
14. Deberíamos poder acceder a la base de datos. También podemos usar PgAdmin como interfaz gráfica.
