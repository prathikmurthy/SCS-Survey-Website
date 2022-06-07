import Mongo from '../../../utilities/MongoDB.js';
require('dotenv').config();
const pid = process.env.MONGO_API;
const db_name = "Planning-Idea-Survey";
const collection = "00" 
const input_collection = "01"
const { MongoClient, ServerApiVersion } = require('mongodb');


export default async function handler(req, res) {
    var m = new Mongo(new MongoClient(pid,  { 
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        serverApi: ServerApiVersion.v1 
    }), db_name, collection);

    const {id} = req.query;
    // console.log(req)

    await m.init();
    const data = await m.find({})
    let out = [];

    if (id == 'all') {
        for (var i = 0; i < data.length; i++) {
            for (var space in data[i]['data']) {
                for (var obj in data[i]['data'][space]) {
                    out.push(data[i]['data'][space][obj]);
                }
            }
        }
    } else {
        for (var i = 0; i < data.length; i++) {
            for (var obj in data[i]['data'][id]) {
                out.push(data[i]['data'][id][obj]);
            }
        }
    }
    

    res.status(200).json( {res: out})
}