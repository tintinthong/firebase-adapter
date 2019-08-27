
exports.addUser = function (req, res, firebase) {
    //check if there is a user with the same name
    let user = req.body;

    //post experience
    var db = firebase.firestore();
    db.collection("users").add(
        user
    )
        .then(function (docRef) {
            //log document id to server
            console.log("Document written with ID: ", docRef.id);
            res.send("Succesfully posted new user");
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}


exports.addUsers=function(req,res,firebase,userData){

     //must make sure this is the data that you want to commit 
     let users = userData;

     console.log(users[0]);
 
     //post experience
     var db = firebase.firestore();
 
     let batch = db.batch();
 
     users.forEach((user) => {
         let newUserRef = db.collection("users").doc()
         batch.set(newUserRef, user)
     })
 
     batch.commit().then(() => {
         res.send("Succesfully posted batch users")
     }).catch(function (error) {
         console.error("Error adding document: ", error);
     });
}

exports.addExperience= function(req,res,firebase){

    let experience = req.body;

    //post experience
    var db = firebase.firestore();
    db.collection("experiences").add(
        experience
    )
        .then(function (docRef) {
            //log document id to server
            console.log("Document written with ID: ", docRef.id);
            res.send("Succesfully posted new experience");
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    
}

exports.addExperiences = function(req,res,firebase, expData){
        //must make sure this is the data that you want to commit 
        let experiences = expData;
        console.log(expData[0])
        //although json it will just render in object forat
    
        //post experience
        var db = firebase.firestore();
    
        let batch = db.batch();
    
        experiences.forEach((experience) => {
            let newExpRef = db.collection("experiences").doc()
            batch.set(newExpRef, experience)
        })
    
        batch.commit().then(() => {
            res.send("Succesfully posted batch experiences")
        }).catch(function (error) {
            console.error("Error adding document: ", error);
        });
}