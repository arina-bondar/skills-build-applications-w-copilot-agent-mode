import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;
const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://localhost:27017/octofit';

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'OctoFit Tracker backend' });
});

app.get('/api/info', (req, res) => {
  res.json({ name: 'OctoFit Tracker', description: 'Node.js + Express + TypeScript backend' });
});

const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB:', MONGO_URI);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend listening on http://localhost:${PORT}`);
  });
});
