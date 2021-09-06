const express = require('express');
const path = require('path');

const app = express ();

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:3030');    
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})
