exports.getExperiences = function (req, res, firebase) {

    let db = firebase.firestore();

    let expRef = db.collection('experiences');

    let mainQuery = expRef

    //check if filter by cities
    mainQuery = req.query.hasOwnProperty('city') ? mainQuery.where('city', '==', req.query.city) : mainQuery

    //check for using array membership
    //if use array membership along with equality, you have to create composite index
    mainQuery = req.query.hasOwnProperty('tag') ? mainQuery.where('tags', 'array-contains', req.query.tag) : mainQuery

    //filter with below certain price point
    mainQuery = req.query.hasOwnProperty('price') ? mainQuery.where('price', '<=', parseInt(req.query.price)) : mainQuery

    //check if limit method is inside
    mainQuery = req.query.hasOwnProperty('limit') ? mainQuery.limit(parseInt(req.query.limit)) : mainQuery

    //payload to be passed to client, i.e. list of  json  documents
    let payload = [];

    mainQuery.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
                payload.push(doc.data())
            });
            res.send({
                success: true,
                code: 200,
                data: payload
            })
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });


}


exports.getExperience = function (req, res, firebase) {
    var db = firebase.firestore();
    var doc = db.collection("experiences").doc(req.params.id).get().then(doc => {
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            console.log('Document data:', doc.data());
            res.send(JSON.stringify(doc.data()))
        }
        res.end()
    })
        .catch(err => {
            console.log('Error getting document', err);
        });
}


exports.getUsers = function (req, res, firebase) {
    var db = firebase.firestore();

    let userRef = db.collection('users');

    let mainQuery = userRef

    mainQuery = req.query.hasOwnProperty('credentialLevel') ? mainQuery.where('credentialLevel', '==', req.query.credentialLevel) : mainQuery
    mainQuery = req.query.hasOwnProperty('country') ? mainQuery.where('hostAddress.country', '==', req.query.country) : mainQuery
    mainQuery = req.query.hasOwnProperty('state') ? mainQuery.where('hostAddress.state', '==', req.query.state) : mainQuery
    mainQuery = req.query.hasOwnProperty('city') ? mainQuery.where('hostAddress.city', '==', req.query.city) : mainQuery
    mainQuery = req.query.hasOwnProperty('limit') ? mainQuery.limit(parseInt(req.query.limit)) : mainQuery

    let payload = [];

    mainQuery.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
                payload.push(doc.data())
            });
            res.send(
                {
                    success: true,
                    code: 200,
                    data: payload
                }
            );
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
}


exports.getUser = function (req, res, firebase) {
    var db = firebase.firestore();
    var doc = db.collection("users").doc(req.params.id).get().then(doc => {
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            console.log('Document data:', doc.data());
            res.send(JSON.stringify(doc.data()))
        }
        res.end()
    })
        .catch(err => {
            console.log('Error getting document', err);
        });

}