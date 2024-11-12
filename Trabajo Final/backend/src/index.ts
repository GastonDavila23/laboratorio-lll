import express from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source';
import pedidoVentaRoutes from './routes/pedidoVentaRoutes';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', pedidoVentaRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log('Base de datos conectada');
    app.listen(3000, () => {
      console.log('Servidor corriendo en http://localhost:3000');
    });
  })
  .catch((error) => console.log('Error al conectar la base de datos:', error));

  
app.use(cors({
  origin: 'http://127.0.0.1:5500', // URL donde Live Server ejecuta el frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
