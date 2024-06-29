# Proyecto 6 API REST 

## Descripción:

En este proyecto se debe de demostrar el aprendizaje de la parte inicial del Backend, 
creando un servidor y conectando a la BBDD para posteriormente realizar un CRUD completo. 
[![N|Solid](https://moonlay.com/wp-content/uploads/2023/01/mongoDB.png)](https://nodesource.com/products/nsolid)[![N|Solid](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkucnJUfKnyTgCTQ-XEp_CbYIDzXJ_1b4BafS7alYn8v8duI9DMcv3zQvb_WF11dX-95M&usqp=CAU)](https://nodesource.com/products/nsolid)[![N|Solid](https://moonlay.com/wp-content/uploads/2023/01/node-JS.png)](https://nodesource.com/products/nsolid)

### Requisitos mínimos:

- La base de datos tiene que tener una IP pública.
- Realizar el README.md con la documentación del proyecto.
- Servidor con express.
- Conexión a una base de datos de Mongo Atlas mediante mongoose.
- Creación de dos modelos.
- Una semilla que suba datos a una de las colecciones.
- Una relación entre colecciones, un array de datos relacionados.
- CRUD completo de ambas colecciones.
- README.md con la documentación del proyecto, indicando los endpoints y que hace cada uno.
- Al actualizar una colección que tenga un array de datos relacionados, no queremos que estos datos se borren.
- Evitaremos duplicados en el array relacionado.

## Clonación del Proyecto:

```sh
git clone https://github.com/DanielSalvatierraSanchez/Proyecto-6-API-REST.git
```

- Entrega del .env:

```
DB_URL=mongodb+srv://dss250583:<password>@cluster0.a9lsjqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

- Scripts del proyecto:

```
npm run start
npm run dev
npm run seed
```

### Endpoints Players

| NAME        | METHOD | ENDPOINT        | BODY                                                        | CONTENT-TYPE     | RESPONSE        |
| ----------- | ------ | --------------- | ----------------------------------------------------------- | ---------------- | --------------- |
| POST PLAYER    | POST   | /register | { **name**, **number**, **position**, age, nationality, image, cars } | application/json | { player } |
| GET PLAYERS       | GET   | / | ---  | --- | { players } |
| GET PLAYER BY ID   | GET    | /id/:id | --- | --- | { player } |
| GET PLAYERS BY NAME    | GET    | /name/:name | --- | --- | { players } |
| GET PLAYER BY NUMBER    | GET    | /number/:number | --- | --- | { player } |
| GET PLAYERS BY POSITION    | GET    | /position/:position | --- | --- | { players } |
| GET PLAYERS BY AGE    | GET    | /age/:age | --- | --- | { players } |
| GET PLAYERS BY NATIONALITY    | GET    | /nationality/:nationality | --- | --- | { players } |
| UPDATE PLAYER | PUT    | /:id | { **player data** } | application/json | { player } |
| DELETE PLAYER | DELETE | /:id | --- | --- | { player } |

### Resumen de los Endpoints Players

- Para la creación de los "Players" se crea un Schema, en el que requerimos 3 campos "name", "number", "position", "age" y "nationality". 

> Primeramente comparará si "name" y "number" ya existen.

> En "position" tendremos 4 opciones (Portero, Defensa, Centrocampista y Delantero).

> Opcionalmente podremos añadirle "age", "nationality", "image" (la cual por defecto agregara una predeterminada) y "cars".  

- Para la obtención de los datos se han creado múltiples maneras de obtenerlos, desde poder obtenerlos todos a la vez, hasta poder obtenerlos dependiendo del "ID", "name", "number", "position", "age" y "nationality".

> Al obtenerlos todos los jugadores a la vez podremos ver con detalle todos los coches que tengan cada uno de ellos.

-  Podremos actualizar cualquier jugador mediante su "ID".

> Se contemplará que si existe un coche y lo introducimos de nuevo que no lo duplique.

- Y finalmente para eliminar cualquier jugador lo eliminaremos mediante su "ID".

### Endpoints Cars

| NAME        | METHOD | ENDPOINT        | BODY                                                        | CONTENT-TYPE     | RESPONSE        |
| ----------- | ------ | --------------- | ----------------------------------------------------------- | ---------------- | --------------- |
| POST CAR    | POST   | /register | { **branch**, **model**, **color**, **price** } | application/json | { car } |
| GET CARS       | GET   | / | ---  | --- | { cars } |
| GET CAR BY ID   | GET    | /id/:id | --- | --- | { car } |
| GET CARS BY BRANCH    | GET    | /branch/:branch | --- | --- | { cars } |
| GET CARS BY MODEL    | GET    | /model/:model | --- | --- | { cars } |
| GET CARS BY COLOR    | GET    | /color/:color | --- | --- | { cars } |
| GET CARS BY PRICE    | GET    | /price/:price | --- | --- | { cars } |
| UPDATE CAR | PUT    | /:id | { **car data** } | application/json | { car } |
| DELETE CAR | DELETE | /:id | --- | --- | { car } |
| DELETE CAR OF PLAYER | DELETE    | /car/:id | { **car model** } | application/json | { car } |

### Resumen de los Endpoints Cars

- Para la creación de los "Cars" se crea un Schema, en el que requerimos 4 campos "branch", "model", "color" y "price".

> Primeramente comparará si "model" ya existe para no duplicarlo. 

- Para la obtención de los datos se han creado múltiples maneras de obtenerlos, desde poder obtenerlos todos a la vez, hasta poder obtenerlos dependiendo del "ID", "branch", "model", "color" y "price".

> Cuando queramos obtener algún coche por "price" nos mostrará todos lo coche que tengan el mismo "price" o superior.

-  Podremos actualizar cualquier coche mediante su "ID"

- Podremos eliminar cualquier coche mediante su "ID".

- Y finalmente podremos eliminar cualquier coche de cualquier jugador.

> Buscaremos el jugador por "ID" y el coche por su "model" para despues eliminar el coche seleccionado del jugador. 
