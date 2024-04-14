// var colors=require('colors');
// console.log("1st proggramme".rainbow
// );

const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const client= new MongoClient(url);

async function collectData()
{
    let result= await client.connect();
    let db=result.db('burgerpoint');
    let collection=db.collection('menu');
    let response=await collection.find({}).toArray();
    console.log(response);

}
collectData();

