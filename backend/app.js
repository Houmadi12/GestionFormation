const express = require('express');
const app = express();
const mongoose = require('mongoose');

const Formations = require('./models/Formations');

mongoose.connect('mongodb+srv://Ambdou:Ambdou321@cluster0.laxil.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.post('/api/formation', (req, res, next) => {
   delete req.body._id;
   const formation = new Formations({
    ...req.body
   })
   formation.save()
    .then(() => res.status(201).json({message: 'Objet enregistrer !'}))
    .catch(error => res.status(400).json({ error}));
})

app.get('/api/formation/:id', (req, res) => {
    Formations.findOne({_id: req.params.id})
        .then(thing => res.status(201).json(thing))
        .catch(error => res.status(404).json({ error }))
});

app.put('/api/formation/:id', (req, res, next) => {
    Formations.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  });

app.delete('/api/formation/:id', (req, res, next) => {
    Formations.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });

app.get('/api/formation', (req, res, next) => {
    Formations.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
})

module.exports = app;