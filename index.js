const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const chefs = require('./data/chef.json');
const recipes = require('./data/recipes.json');

app.get('/', (req, res)=>{
  res.send('Flavor Fusionists chefs');
})

app.get('/chefs', (req, res)=>{
  res.send(chefs);
});

app.get('/recipes', (req, res)=>{
  res.send(recipes);
})


app.listen(port, ()=> {
  console.log(`this is ${port}`);
})