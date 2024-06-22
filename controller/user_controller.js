const db = require('../db/data_base')

const obtenerUser = (req, res) => {
    const sql ='SELECT * FROM users_login';

    db.query(sql, (err, result)=> {
        if(err) throw err;

        res.json(result)
    })
}

const obtenerUserID = (req, res)=> {
    const {id} = req.params;
    const sql ='SELECT * FROM user_login WHERE id = ?';

    db.query(sql, [id], (err, result)=> {
        if(err) throw err;
        res.json(result);
    })
}

const createUser = (req, res)=>{
    const {email, password} = req.body;
    const sql = 'INSERT INTO user_login (email, password) VALUES (?,?)';

    db.query(sql, [email, password], (err,result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Usuario creado ok',
            userId: result.insertId
        })
    })
};

const modificarUser = (req, res)=>{
    const {id} =req.params;
    const {email, password} = req.body;
    const sql= 'UPDATE ususariios SET email = ?, password = ? WHERE id= ?';

    db.query(spl, [email, password, id], (err,result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Usuario modificado ok'
        })
    })
}

const borrarUser =(req, res)=>{
    const {id}= req.params;
    const sql= 'DELETE FROM user_login WHERE id=?';

    db.query(sql, [id], (err,result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Usuario borrado ok'
        })
    })
}

module.exports = {
    obtenerUser,
    obtenerUserID,
    createUser,
    modificarUser,
    borrarUser
}