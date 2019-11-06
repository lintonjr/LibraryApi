import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;
// Quando uma rota qualquer inexistente for enviada

app.get('*', (req, res) => res.status(200).send({
   message: 'Bem Vindo a Api.'
}));

app.listen(port, () => {
   console.log(`Rodando na porta ${port}`);
});
export default app;