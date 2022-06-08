// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { input_data } from '../../data/input.js'
import input_data from '../../data/input_data.json'
const fs = require('fs')
const path = require('path')
require('dotenv').config();
const id = process.env.MONGO_API;
const db_name = "Planning-Idea-Survey";
const collection = "02" 
import Mongo from '../../utilities/MongoDB.js';
const { MongoClient, ServerApiVersion } = require('mongodb');

export default async function handler(req, res) {
    
    switch (req.method) {
        case 'POST':
            var m = new Mongo(new MongoClient(id,  { 
                useNewUrlParser: true,
                useUnifiedTopology: true, 
                serverApi: ServerApiVersion.v1 
            }), db_name, '02')

            await m.init()

            let doc = await m.find({id: 'submissions'})
            doc = doc[0]
            if (doc['data'].find((x) => x == req.body['id']) == undefined) {
                doc['data'].push(req.body['id'])
                // await m.replace({id: 'submissions'}, {id: 'submissions', data:doc['data']})
                
                doc = await m.find({id: 'votes'});
                doc = doc[0].data
                for (var i in req.body['data']) {
                    for (var y in req.body['data'][i]) {
                        try {
                            if (doc[i].find((x) => x.id == y.id) == undefined) {
                                doc[i].push(y)
                            } else {
                                doc[i][doc[i].findIndex((x) => x.id == y.id)].votes += 1;
                            }
                        } catch (e) {
                            doc[i] = []
                            doc[i].push(y)
                        }
                    }
                }
                console.log(doc)
                await m.replace({id: 'votes'}, {id: 'votes', data:doc})

                res.status(200).json( {res: 'Success'} )


            } else {
                res.status(500).json( {res: 'ERROR: Our records indicate you have already made a submission, if this is an error please contact pmurthy@steelcase.com'})
            }

            break;
    }
  }
