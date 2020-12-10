const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const morgan = require('morgan');
const logger = morgan('tiny')

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(logger);

app.use(express.static('public'));

const PORT = 3232;

const petNames = ['fluffy', 'bubba', 'scooter', 'moose', 'rusty']



app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/pets', (req, res)=>{
    function pets(p){
        //const p = petNames[0];
        //console.log(p);
        return p;
    }
    
    //pets(petNames[0]);
    
    const newArray = petNames.map(pets);
    //console.log(newArray);
    
    function transformToListItem(p) {
        return `<li>${p}<li>`;
    }
    
    const listItemArray = petNames.map(transformToListItem)
    //console.log(listItemArray.join(' '));

    res.render('pets', {
                locals: {
                    petNames: p
                }
                
            
           

    })
})

app.get('/pets/;name', (req, res)=>{
    res.render('indPets', {

    })
})


server.listen(PORT, ()=>{
    console.log(`running on ${PORT}`)
})