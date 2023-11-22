const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const chefs = require('./data/chef.json');
const recipes = require('./data/recipes.json');
const blogs = require('./data/blogs.json');

app.get('/', (req, res)=>{
  res.send('Flavor Fusionists chefs');
})

app.get('/chefs', (req, res)=>{
  res.send(chefs);
});

app.get('/recipes', (req, res)=>{
  res.send(recipes);
})

app.get('/recipes/:id', (req, res)=>{
  const id = parseInt(req.params.id);
  const selectedRecipes = recipes.find(r => r._id === id);
  res.send(selectedRecipes);
})

app.get('/chefs/chef/recipes/:id', (req, res)=>{
  const id = parseInt(req.params.id);
  const chefRecipes = recipes.find(r => r._id === id);
  res.send(chefRecipes);
})

app.get('/blogs', (req, res)=> {
  res.send(blogs);
})

app.listen(port, ()=> {
  console.log(`this is ${port}`);
})