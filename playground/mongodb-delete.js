const  {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to Connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').deleteMany({name: 'Itay Shapira'}).then((result) => {
    console.log(result.result);
  })
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5a3538ec9da66aa82120ee99')}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  })
  //db.close();
});
