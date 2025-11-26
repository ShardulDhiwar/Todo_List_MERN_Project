import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import DBConnection from './config/db.js';
import TodoRoute from  './routes/TodoRoute.js'

dotenv.config();
const PORT = 3000;
const app = express();

DBConnection();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/todos", TodoRoute);

app.get('/', (req, res) => {
    res.json({ message: 'server working' });
});

app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
});
