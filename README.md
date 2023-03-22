# Node-Api

Aplicación que contendrá:

- Uso de express para crear un servidor
- Uso de Dotenv para variables de entorno
- Uso de multer para la manipulación de archivos
- Uso de cors para no tener problemas de cors


El tutorial proviene desde [Youtube-NODE JS y Express BACKEND](https://www.youtube.com/watch?v=xRXHQlqA3Ak)



## Installation

Para instalar el proyecto debe estar parado dentro de la carpeta y ejecutar 

```bash
  npm i
```
    
## Dotenv

Normalmente dotenv se importa en el archivo y de esta manera se puede usar en el proyecto

```javascript
import dotenv from 'dotenv'
dotenv.config()
```

En este proyecto se definio el uso de dotenv en el script `npm run start:dev` porque no estaba llegando a todas partes del proyecto

## Deployment
Para deployear el proyecto usar el comando

```bash
  npm run start:dev
```

## Environment Variables

Para el correcto funcionamiento del proyecto, en el .env debes tener las siguientes variables de entorno

`DB_NAME` -> api-node

`MONGO_URI`

`PORT`

`PUBLIC_URL` -> http://localhost:PORT

