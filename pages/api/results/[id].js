import Mongo from '../../../utilities/MongoDB.js';
require('dotenv').config();
const pid = process.env.MONGO_API;
const db_name = "Planning-Idea-Survey";
const collection = "02" 
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
    let data = await m.find({id: 'votes'})
    
    let out = [];
    if (id == 'all') {
        data = data[0]['data']
        for (var i in data) {
            for (var j in data[i]) {
                out.push(data[i][j])
            }
        }
    } else {
        data = data[0]['data'][id]
        for (var i in data) {
            out.push(data[i])
        }
    }
    // console.log(data)
    // if (data.length == 0) {return res.status(200).json( {res: out})}
    
    // data = data['data'][id]
    // if (id == 'all') {
    //     for (var i = 0; i < data.length; i++) {
    //         for (var space in data[i]['data']) {
    //             for (var obj in data[i]['data'][space]) {
    //                 out.push(data[i]['data'][space][obj]);
    //             }
    //         }
    //     }
    // } else {
    //     for (var i = 0; i < data.length; i++) {
    //         for (var obj in data[i]['data'][id]) {
    //             out.push(data[i]['data'][id][obj]);
    //         }
    //     }
    // }

    out.sort(function (a, b) {
        if (b.votes - a.votes == 0) {
            return b.views - a.views;
        } else {
            return b.votes - a.votes;
        }
    } )
    
    // console.log(out)
    await m.close();

    return res.status(200).json( {res: out})
}