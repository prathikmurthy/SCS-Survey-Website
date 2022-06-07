import Mongo from '../../utilities/MongoDB.js';
require('dotenv').config();
const id = process.env.MONGO_API;
const db_name = "Planning-Idea-Survey";
const collection = "00" 
const input_collection = "01"
const { MongoClient, ServerApiVersion } = require('mongodb');


export default async function handler(req, res) {
    var m = new Mongo(new MongoClient(id,  { 
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        serverApi: ServerApiVersion.v1 
    }), db_name, collection);

    await m.init();

    const data = await m.find({})

    let out = [];

    // console.log(data)
    for (var i = 0; i < data.length; i++) {
        // console.log(data[i]['data']);
        for (var obj in data[i]['data'][req.body]) {
            out.push(data[i]['data'][req.body][obj]);
        }
    }
    

    res.status(200).json( {res: out})
}