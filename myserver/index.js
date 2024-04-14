const {MongoClient} = require('mongodb');
const url ='mongodb://localhost:27017';
const c = new MongoClient(url);

async function cData()
{
 let result= await c.connect();
 let d= result.db("burgerpoint");
 let collection= d.collection('menu');
 let response=await collection.find({}).toArray();
 console.log(response);
 

}
cData();