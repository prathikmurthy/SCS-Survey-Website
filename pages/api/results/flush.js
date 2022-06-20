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
    
    await m.cleardb();
    
    await m.close();
    
    var m = new Mongo(new MongoClient(id,  { 
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        serverApi: ServerApiVersion.v1 
    }), db_name, '02');

    await m.init();

    let votes = {id: 'votes', data: {'Meeting Spaces': [], 'Private Space': [], 'Private Office': [], 'Semi-Private Office': [], 'Workstation': []}}
    let subs = {id: 'submissions', data: []}
    await m.cleardb();
    await m.add(votes);
    await m.add(subs);
    await m.close()
    
    // const data = await m.find({})

    // let out = [];

    // console.log("TESTEST")
    // for (var i = 0; i < data.length; i++) {
    //     // console.log(data[i]['data']);
    //     for (var space in data[i]['data']) {
    //         // console.log(space)
    //         for (var obj in data[i]['data'][space]) {
    //             out.push(data[i]['data'][space][obj]);
    //         }
    //     }
    // }
    

    res.status(200).json( {res: out})
}