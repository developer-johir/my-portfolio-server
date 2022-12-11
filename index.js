const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
 
// middleware
app.use(cors());
app.use(express.json());

const categories = require('./data/categories.json')
const project = require('./data/project.json')
 
app.get('/', (req, res) => {
   res.send('Hello from My Portfolio server');
});



app.get('/project-categories', (req, res) => {
    res.send(categories);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if(id === '08'){
        res.send(project);
    }
    else{
        const category_project = project.filter(n => n.category_id === id);
        res.send(category_project);
    }
})

app.get('/project', (req, res) => {
    res.send(project);
})

app.get('/project/:id', (req, res) => {
    const id = req.params.id;
    const selectedProject = project.find(n => n._id === id);
    res.send(selectedProject);
})


 
app.listen(port, () => {
   console.log(`My Portfolio to port ${port}`);
})
