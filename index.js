const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const bancos = [
  { id: 1, nome: 'Banco do Brasil' },
  { id: 2, nome: 'JPMorgan Chase & Co.' },
  { id: 3, nome: 'HSBC Holdings plc' },
  { id: 4, nome: 'Deutsche Bank' },
  { id: 5, nome: 'Mitsubishi UFJ Financial Group (MUFG)' }
];

app.get('/bancos', (req, res) => {
  const listaBancos = bancos.map(banco => ({ id: banco.id, nome: banco.nome }));
  res.json(listaBancos);
});

app.get('/bancos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const banco = bancos.find(b => b.id === id);

  if (!banco) {
    return res.status(404).json({ mensagem: 'Banco não encontrado' });
  }

  res.json(banco);
});

app.post('/simular-financiamento', (req, res) => {
  const { valorDesejado, bancoId, numParcelas } = req.body;

  if (!valorDesejado || !bancoId || !numParcelas) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
  }

  const banco = bancos.find(b => b.id === bancoId);

  if (!banco) {
    return res.status(404).json({ mensagem: 'Banco não encontrado' });
  }

  const valorParcela = valorDesejado / numParcelas; 
  const valorTotal = valorParcela * numParcelas; 

  res.json({
    valorParcela,
    valorTotal,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});