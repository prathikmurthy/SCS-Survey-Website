import Mongo from '../../../utilities/MongoDB.js';
require('dotenv').config();
const id = process.env.MONGO_API;
const db_name = "Planning-Idea-Survey";
const collection = "00" 
const { MongoClient, ServerApiVersion } = require('mongodb');


export default async function handler(req, res) {
    var m = new Mongo(new MongoClient(id,  { 
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        serverApi: ServerApiVersion.v1 
    }), db_name, collection);

    await m.init();

    const data = await m.find({})

    
    

    res.status(200).json( {res: out})
}