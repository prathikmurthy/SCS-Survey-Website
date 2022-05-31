// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Mongo from '../../components/MongoDB.js';
require('dotenv').config();
const id = process.env.MONGO_API;
const db_name = "Planning-Idea-Survey";
const collection = "00" 
const { MongoClient, ServerApiVersion } = require('mongodb');

export default async function handler(req, res) {
    let m = new Mongo(new MongoClient(id,  { 
                                                useNewUrlParser: true,
                                                useUnifiedTopology: true, 
                                                serverApi: ServerApiVersion.v1 
                                            }), db_name, collection);

    await m.init();

    switch (req.method) {
        case 'POST': 
            console.log(req.body);
        
            const d = new Date();
        
            req.body['date'] = d.toString();
        
            await m.add(req.body);
            
            res.status(200).json( {res: 'Success'} )

            break;
        
        case 'DELETE':
            await m.cleardb();
            res.status(200).json( {res: 'Success'})
        }

    await m.close();
  }

// API Call to Clear Database (use in Dev Tools Console)
// fetch('http://localhost:3000/api/db', {
//   method: 'DELETE',
  
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8'
//   }
// })
// .then(res => res.json())
// .then(console.log)
  