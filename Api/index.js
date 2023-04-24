import express from "express"
import indexRouter from "./Routers/aprendices.routers.js"
import cors from 'cors';

//iniciamos nuestra App express
const app = express()
//Permite procesar los datos del cliente, si es un objeto json lo podra recibir
app.use(express.json())
//Permite que nos podamos comunicar entre aplicaciones web
app.use(cors('*'))

app.use(indexRouter)

app.listen(3025);
console.log(`Aplicacion corriendo en el puerto ${3025}`)
