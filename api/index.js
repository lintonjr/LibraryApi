import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './server/routes/BookRoutes';

config.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

app.use('/api/v1/books', bookRoutes);

// Quando uma rota inexistente for requisitada
app.get('*', (req, res) => res.status(200).send({
  message: 'Bem-vindo a Library Api.',
}));

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});

export default app;