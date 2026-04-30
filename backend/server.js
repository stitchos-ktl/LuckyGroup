import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const services = [
  {
    id: 1,
    name: 'Kattali Textile Limited',
    description: 'Premier garments and textile manufacturer dedicated to producing high-quality fabrics and modern clothing lines.',
    image: '/Ktl logo.jpg',
    category: 'Garments'
  },
  {
    id: 2,
    name: 'Brother Properties',
    description: 'Building development and real estate solutions. Your trusted partner for modern infrastructure and property investment.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80',
    category: 'Building development'
  },
  {
    id: 3,
    name: 'DN Security',
    description: 'Share exchange business providing reliable, secure, and transparent operations in the financial securities market.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80',
    category: 'Share Exchange'
  },
  {
    id: 4,
    name: 'Lucky Store',
    description: 'Your reliable e-commercial grocery shop offering a wide range of essential products, consumer goods, and daily needs.',
    image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=500&q=80',
    category: 'E-commercial Grocery Shop'
  }
];

// Routes
app.get('/api/products', (req, res) => {
  res.json(services);
});

app.get('/api/products/:id', (req, res) => {
  const service = services.find(p => p.id === parseInt(req.params.id));
  if (!service) return res.status(404).json({ message: 'Service not found' });
  res.json(service);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
