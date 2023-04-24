import axios from "axios"

//consumimos la api
export const createAprenizRequest = async (aprendiz) =>
      await axios.post("http:localhost:3025/aprendices", aprendiz)