//const MongoClient = require('mongodb').MongoClient; //connect do mongo server
const {MongoClient, ObjectID} = require('mongodb'); //destructing

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    const db = client.db();
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     completed: true
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Users').find().count().then((count) => {
    //     console.log(count);
    // });

    db.collection('Users').find({name: 'Teste'}).forEach((elem) => {
        console.log(elem);
    });

    // db.collection('Users').deleteOne({_id: ObjectID('5ada34740eb20c2aafc6e1a7')}).then((elem) => {
    //     console.log(elem.result);
    // }, (err) => {
    //     console.log('The user could not be deleted!');
    // });

    //client.close()
    client.close();
    //db.close();
});