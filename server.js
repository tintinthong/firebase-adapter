
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const port = 8080;
const path = require('path')
const lib = require('./lib.js')

//loading data
const expData = require('./data/experiences.json')
const userData = require('./data/users.json');

//load firebase here
const firebase = require('firebase');
const auth = require('firebase/auth'); //not in use

//middle ware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
    next();
});

const firebaseConfig = require('./config.json')

//Initialize firebase app
firebase.initializeApp(firebaseConfig)


app.get('/', function (req, res) {
    //changes res.sendFile instead of res.sendfile
    res.sendFile(path.join(__dirname, 'index.html'))
})

//EXPERIENCES

// requiring controllers 
const { 
    getExperiences, 
    getExperience,
    getUsers
} = require('./controllers/getMethods.js')

const {
    addUser,
    addUsers,
    addExperience,
    addExperiences
} = require('./controllers/postMethods.js')
    

//list all experiences
app.get('/experiences', (req, res) => {
    getExperiences(req, res, firebase)
})

//get experiences with specific id
app.get('/experiences/:id', (req, res) => {
    getExperience(req, res, firebase)
})


//add an experience 
app.post('/experiences/new/', (req, res)=> {
   addExperience(req,res,firebase)
})

// add many experiences 
app.post('/experiences/new/batch', (req, res)=> {
    addExperiences(req,res,firebase,expData)

})

//list all users 
app.get('/users', (req, res )=> {
    getUsers(req,res, firebase)
})


//get users with specific id
app.get('/users/:id', (req,res)=>{
    getUser(req,res,firebase);
})


// add a user
app.post('/users/new', (req, res)=> {
    addUser(req,res,firebase)
})


// add many users
app.post('/users/new/batch', (req, res)=> {
    addUsers(req,res,firebase,userData)
})


server.listen(port, (err) => {
    if (err) {
        throw err;
    }
    /* eslint-disable no-console */
    console.log(`listening on port ${port}`)
    console.log('Node Endpoints working :)');
});


            //enbales offline data too
            //https://medium.com/mayeedwin/firebase-cloud-firestore-web-codelab-e6ebde2ebede