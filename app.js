const express = require('express');
const path = require('path');

const app = express ();

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

app.listen(3030, () => {
    console.log('Servidor corriendo en http://localhost:3030');    
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})
