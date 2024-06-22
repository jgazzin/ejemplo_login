const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
})

connection.connect((err) => {
    if(err) {
        console.log('Error de conección BD: ', err);
        return;
    }
    console.log('Conectado a BD ok');

    connection.query('CREATE DATABASE IF NOT EXISTS users_login', (err, result) => {
        if (err) {
            console.log('Error creando BD');
            return;
        }
        console.log('BD asegurada');

        connection.changeUser({database: 'users_login'}, (err) =>{
            if(err) {
                console.error('Error al cambiar a users_login', err);
            }

            const createtableQuery = `
            CREATE TABLE IF NOT EXISTS users(
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(50) NOT NULL,
            password VARCHAR(8) NOT NULL);`;

            connection.query(createtableQuery, (err, result) =>{
                if(err) {
                    console.log('Error creando tabla: ',err);
                    return;
                }
                console.log('Tabla asegurada');
            })
        })
    })
})

module.exports = connection;