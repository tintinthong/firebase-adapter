# Firebase Library

This is a codebase that help people get up and running with firebase. The functionality was designed based upon building an airbnb-type website.

## Installation and Getting Started 

1. [Follow instructions here](https://firebase.google.com/docs/web/setup#config-object)
2. Put the config object into a json file called `config.json`

## Testing APIs

Use Postman 

## Instructions

```
node server.js
```

### To Get from Database


Get all experiences
```
localhost:8080/experiences
```

Get a single experience
```
localhost:8080/experience/eDtFccnT0NBBmWcO9dY
```

Use certain filters too
```
localhost:8080/experiences/?limit=10&?price=10&?city=Dubai
```

### Post to Database 

The single post method uses from request from `index.html`.

Post `./data/experiences.json`
```
localhost:8080/experience/new/batch
```

Post `./data/usersjson`
```
localhost:8080/users/new/batch
```

## Things to Do

1. Generate new data as opposed to the one generated using online data generator tool. Note: make sure filter is working correctly based on new data
2. Use cloud storage to store image and meta info of image in cloud firestore. Write get method to download.


## Useful Links

[Using query parameters](https://medium.com/@fullsour/when-should-you-use-path-variable-and-query-parameter-a346790e8a6d)

[Restful API Guide](https://medium.com/better-programming/restful-api-design-step-by-step-guide-2f2c9f9fcdbf)

[Storing image in firebase storage](https://stackoverflow.com/questions/47055319/store-image-in-firebase-storage-and-save-metadata-in-firebase-cloud-firestore-b)

[Using query parameters -- other reference](https://stackabuse.com/get-query-strings-and-parameters-in-express-js/)



