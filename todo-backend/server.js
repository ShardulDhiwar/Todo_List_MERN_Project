import express from 'express';
import cors from 'cors';

const PORT = 3000; 
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'server working' });
});

app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`)
});