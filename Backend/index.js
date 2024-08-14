import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import DbCon from './config/db.js';
import AuthRoutes from './routes/Auth.js';
import NotesRoutes from './routes/Notes.js';
import cookieParser from 'cookie-parser';
import { createServer } from 'http';
import { parse } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

DbCon();

app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'  // Replace with your frontend URL
}));
app.use(cookieParser());
app.use(express.json());
app.use('/auth', AuthRoutes);
app.use('/notes', NotesRoutes);

app.get('/', (req, res) => {
  res.send('hello from backend');
});

// Create an HTTP server
const server = createServer(app);

export default server;
