// cloud storage is used to store images

var firebase = require("firebase");

require("firebase/database")
require("firebase/firestore")
require("firebase/storage")

const firebaseConfig= require('./config.json')

firebase.initializeApp(firebaseConfig)

// storage
var storage = firebase.storage();

//root reference 
var storageRef = storage.ref();

//images folder reference 
var imagesRef=storageRef.child('images');

// console.log(imagesRef.name);
// console.log(imagesRef.bucket);
// console.log(imagesRef.child('about-1.jpg').fullPath);

