const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

//app.use(express.static(__dirname + '/templates'));

const es6Renderer = require('express-es6-template-engine')
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html')

const PORT = 3000;

const projects = {
    pythonGame: 'Python RPG game',
    frontEnd: 'Front end API group project',
    backEnd: 'place holder for back end',
    React: 'place holder for react',
    Capstone: 'placeholder for capstone'
}

app.get('/', (req, res)=>{
    res.render('home')
})

app.get('/projects', (req, res) =>{
    res.render('list', {
        locals: {
            projects: Object.keys(projects)
        }
    })
})

app.get('/projects/portfolio/:projectName', (req, res) => {
    const project = req.params.projectName
    res.render('details', {
        locals: {
            project,
            description: projects[project]            
        }
    })
});


server.listen(PORT, ()=> {
    console.log(`running on ${PORT}`)
})
