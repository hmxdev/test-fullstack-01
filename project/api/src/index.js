import { PrismaClient } from '@prisma/client';
import express from 'express';
import paymentRoutes from './routes/payment.routes.js';

const app = express();

app.use(express.json());

app.use(paymentRoutes);

app.listen(3001, async () => {
  console.log('Server running at', 3001);

  const prisma = new PrismaClient();

  try {
    await prisma.$connect();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
});
