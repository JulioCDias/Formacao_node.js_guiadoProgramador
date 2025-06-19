const express = require("express"); // Importando o Express
const app = express(); // Criando uma instância do Express
const port = 5000; // Definindo a porta do servidor
app.use(express.json()); // Middleware para analisar JSON no corpo das requisições
app.get("/", (req, res) => {
  // Definindo uma rota GET para a raiz
  res.send("Hello World!"); // Enviando uma resposta simples
});

app.listen(port, () => {
  // Iniciando o servidor na porta definida
  console.log(`Servidor rodando na porta ${port}`); // Log de confirmação
}); // Fim do app.listen
// O servidor agora está configurado para responder a requisiçaõ
