import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.json({ message: '¡Bienvenido al Manual API!' });
});

// Ruta de ejemplo para el manual
app.get('/api/manual', (req, res) => {
  res.json({
    title: 'Manual de React',
    sections: [
      {
        id: 1,
        title: 'Introducción a React',
        content: 'React es una biblioteca de JavaScript para crear interfaces de usuario.'
      },
      {
        id: 2,
        title: 'Componentes',
        content: 'Los componentes son la base de cualquier aplicación React.'
      },
      {
        id: 3,
        title: 'Props y State',
        content: 'Props y State son conceptos fundamentales para manejar datos en React.'
      }
    ]
  });
});

// Ruta para obtener una sección específica
app.get('/api/manual/:id', (req, res) => {
  const sectionId = parseInt(req.params.id);
  const sections = [
    {
      id: 1,
      title: 'Introducción a React',
      content: 'React es una biblioteca de JavaScript para crear interfaces de usuario.',
      details: 'React fue creado por Facebook y se ha convertido en una de las bibliotecas más populares para el desarrollo frontend.'
    },
    {
      id: 2,
      title: 'Componentes',
      content: 'Los componentes son la base de cualquier aplicación React.',
      details: 'Los componentes pueden ser funcionales o de clase, aunque los componentes funcionales con hooks son la práctica recomendada.'
    },
    {
      id: 3,
      title: 'Props y State',
      content: 'Props y State son conceptos fundamentales para manejar datos en React.',
      details: 'Las props son inmutables y se pasan de componentes padre a hijo. El state es mutable y se maneja internamente en el componente.'
    }
  ];

  const section = sections.find(s => s.id === sectionId);
  if (section) {
    res.json(section);
  } else {
    res.status(404).json({ error: 'Sección no encontrada' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
