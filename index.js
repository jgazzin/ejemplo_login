// npm init - para crear el package.json
/* intalar los modulos:
npm install express --save
npm instal mysql2
*/

const express = require('express');
const app = express();
let port = 3000;
const usuariosRuta = require('./routes/usuarios');

app.use(express.json())
app.use('/usuarios', usuariosRuta)
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`servidor express desde puerto ${port}`);
})