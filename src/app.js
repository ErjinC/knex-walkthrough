const express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')["development"]);

app.get('/', (request, response) => {
  response.send('Application up and running!')
})



app.listen(port, () => {
  console.log('Knex and Express Running!')
})

app.get('/pets', (request, response) => {
  knex('pet')
    .select('*')
    .then(data => {
      var petNames = data.map(pet => pet.name)
      response.json(petNames)
    })
})