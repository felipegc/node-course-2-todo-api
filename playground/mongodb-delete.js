const {MongoClient, ObjectID} = require('mongodb'); //destructing

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    var db = client.db();
    // db.collection('Todos').deleteMany({text: 'Something todo'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Todo 1'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({_id: ObjectID("5ada2a95e4c7e3d83fa65fea")}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Felipe'}).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({_id: ObjectID("5ada34597de15c2a97163ca7")}).then((result) => {
        console.log(result);
    });

    client.close();
});