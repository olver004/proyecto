import {pool} from "../DB.js"

export const getAprendices =  async(req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM aprendis ORDER BY id DESC");
        console.log("resultado: "+result[0])
        res.json(result);
    }catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}
export const getAprendiz = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM aprendis where id=?", [req.params.id])
        if(result.length == 0){
            return res.status(404).json({message: "Aprendiz not found"})
        }
    }catch(err){
        return res.status(404).json({
            message: err.message,
        });
    }
};

export const createAprendiz = async (req, res) => {
    try{
        const {id,name,surname,telefono,sexo} = req.body;
        const [result] = await pool.query("INSERT INTO aprendis(name,surname,telefono,sexo) VALUES(?,?,?,?,?)",
        [name.surname,telefono,sexo]
        );
        res.json({
            id: result.insertId,
            name,
            surname,
            telefono,
            sexo
        });
    }catch(error){
        
    }
}