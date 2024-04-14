const{MongoClient}=require('mongodb');
const link="mongodb://localhost:27017";
const custmor=new MongoClient(link);

async function data()
{
    let op=await custmor.connect();
    let db
}