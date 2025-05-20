const express = require('express');
const app = express();
app.use(express.json());

// Rota para a página inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao SGHSS! Acesse /cadastro-paciente.html para cadastrar pacientes.');
});

// Rota para cadastro de pacientes
app.post('/pacientes', (req, res) => {
  console.log('Dados recebidos:', req.body);
  res.status(201).json({ mensagem: 'Cadastro realizado com sucesso!' });
});

// Sirva arquivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

// Inicie o servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});