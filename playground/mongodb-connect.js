//const MongoClient = require('mongodb').MongoClient; //connect do mongo server
const {MongoClient, ObjectID} = require('mongodb'); //destructing

var obj = new ObjectID();
console.log(obj);

//object destructiring ec6 permite que tiremos uma propriedade do objeto facinho
var user = {name: 'felipe', age: 29};//
var {name} = user;//este eh o trick
console.log(name);



                                                               //client for version 3
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something todo',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Teste',
        age: 29,
        location: 'Belo Horizonte'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert User', err);
        }

        console.log(result.ops[0]._id.getTimestamp());
        console.log(JSON.stringify(result.ops, undefined, 2));

    });

    client.close()
    //db.close();
});