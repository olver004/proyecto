//HTTP es un protocolo que nos permite la comunicacion entre varias computadoras en la API usaremos los metodos get, post, delete de HTTP
//http nos devolvera un codigo de respuesta (200 si todo sale bien y 400 si falla )
//las APIS siempre devuelven  al cliente  un codigo de estado y un json si todo sale bien con los datos
//request = solicitud, response = respuesta
import {Router} from "express"
import {getAprendices, getAprendiz} from "../controllers/aprendices.controllers.js";

const routers = Router();
routers.get("/aprendices",getAprendices);
routers.get("/aprendices/:id",getAprendiz);
export default routers;