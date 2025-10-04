const express = require('express');
const path = require('path');
const app = express();
const { exec }= require('child_process');

// Configura a pasta correta 
app.use(express.static(path.join(__dirname, 'FullStack_2025.1_V', 'LAB_1')));

// Rota para index_Aula_2.html
app.get('/index_Aula_2.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'FullStack_2025.1_V', 'LAB_1', 'index_Aula_2.html'));
});

// Porta 80
const PORT = 80;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando: http://localhost:${PORT}/index_Aula_2.html`);
    exec(`start http://localhost:${PORT}/index_Aula_2.html`);
})
