// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Mongo from '../../components/MongoDB.js';
require('dotenv').config();
const id = process.env.MONGO_API;

console.log(id);

const { MongoClient, ServerApiVersion } = require('mongodb');

export default async function handler(req, res) {
    console.log(req.body);

    let m = new Mongo(new MongoClient(id, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }), "test", "test");
    
    await m.init();

    const d = new Date();

    req.body['date'] = d.toString();

    await m.add(req.body);
    await m.close();

    res.status(200).json( {res: 'Success'} )
  }
  