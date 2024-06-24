const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./models/Todo');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/Todo')
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch(err => {
    console.log("Failed to connect with mongodb");
  });

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  console.log('Request body:', req.body);

  res.on('finish', () => {
    console.log(`Response status: ${res.statusCode}`);
  });

  next();
});

app.get('/get', (req, res) => {
  TodoModel.find()
    .then(result => res.json(result))
    .catch(err => console.log(err));
});

app.post('/add', (req, res) => {
  const task = req.body.task;
  TodoModel.create({ task: task })
    .then(result => res.json(result))
    .catch(err => console.log(err));
});

app.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { done } = req.body;
  TodoModel.findByIdAndUpdate({ _id: id }, { done: done }, { new: true })
    .then(result => res.status(200).json(result))
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.put('/edit/:id', (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  TodoModel.findByIdAndUpdate({ _id: id }, { task: task })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete({ _id: id })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
