# NodeJS & React with Redux demo
by [@Daniel Rodriguez Guerrero](mailto:a.magno.mx@gmail.com)

Para este proyecto se utilizó el framework [Next.js](https://nextjs.org/) y [TypeORM](https://typeorm.io/) para la construcción del backend y [React](https://es.reactjs.org/) para la construcción del frontend, usando [Redux](https://es.redux.js.org/).

Pasos para la construcción del proyecto:

Entrar ala carpeta del backend y ejecutar el comando:

```npm install```

Modificar el archivo app.module.ts para que el backend se conecte a la base de datos de postgreSQL.

Ejecutar el comando:

```npm run start```

Esto ejecutará el backend en el puerto 3000.

Entrar a la carpeta del frontend y ejecutar el comando:

```npm install```

Ejecturar el comando:

```npm run start```

Esto ejecutará el frontend en el puerto 3001.

Entrar al navegador y escribir la dirección:

```http://localhost:3001```

Se pueden mandar peticiones POST a la dirección:

```http://localhost:3000/```

Debe contener un JSON con los siguientes campos:

```
{
	"name": "test",
	"duration": 7200,
	"schedule": "2022-06-21 22:00:00",
	"poster": "https://picsum.photos/200/300",
	"rating": "2",
	"language": "Portuguese"
}
```
