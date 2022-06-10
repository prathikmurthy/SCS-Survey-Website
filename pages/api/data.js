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
            if (req.body['id'] == "") {
                return res.status(500).json( {res: 'ERROR: You must include your Steelcase username in your submission!'})
            }

            var m = new Mongo(new MongoClient(id,  { 
                useNewUrlParser: true,
                useUnifiedTopology: true, 
                serverApi: ServerApiVersion.v1 
            }), db_name, '02')

            await m.init()

            var doc = await m.find({id: 'submissions'})
            doc = doc[0]
            if (doc['data'].find((x) => x == req.body['id']) == undefined) {
                doc['data'].push(req.body['id'])
                await m.replace({id: 'submissions'}, {id: 'submissions', data:doc['data']})
                
                doc = await m.find({id: 'votes'});
                doc = doc[0].data
                // console.log(doc)
                // console.log(req.body['data'])
                for (var i in req.body['data']) {
                    if (req.body['data'][i].length != 0) {
                        for (var j in req.body['data'][i])
                        if (doc[i].find((x) => x.id == req.body['data'][i][j].id) == undefined) {
                            req.body['data'][i][j].votes = req.body['data'][i][j].votes + 1;
                            doc[i].push(req.body['data'][i][j])
                        } else {
                            doc[i][doc[i].findIndex((x) => x.id == req.body['data'][i][j].id)].votes += 1;
                        }
                        // console.log(doc)

                    }
                }
                await m.replace({id: 'votes'}, {id: 'votes', data:doc})
                await m.close();
                

                return res.status(200).json( {res: 'Success'} )


            } else {
                await m.close();

                return res.status(500).json( {res: 'ERROR: Our records indicate you have already made a submission, if this is an error please contact pmurthy@steelcase.com'})
            }

            break;

        case 'GET':
            var m = new Mongo(new MongoClient(id,  { 
                useNewUrlParser: true,
                useUnifiedTopology: true, 
                serverApi: ServerApiVersion.v1 
            }), db_name, '02')

            await m.init()

            var doc = await m.find({id: 'submissions'})
            await m.close();
            doc = doc[0]['data']
            // console.log(doc)

            return res.status(200).json( {res: doc} )
            break;
    }
  }
