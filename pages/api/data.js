// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { input_data } from '../../data/input.js'
import input_data from '../../data/input_data.json'
const fs = require('fs')

export default async function handler(req, res) {
    
    switch (req.method) {
            
        case 'DELETE':
            // for (var space in req.body) {
            //     for (var tile in req.body[space]) {
            //         console.log(tile)
            //     }
            // }
            console.log(req.body)
            for (var space in req.body) {
                // console.log(space)
                for (var tileidx in req.body[space]) {
                    // console.log(req.body[space][tileidx])
                    
                    for (var i = 0; i < input_data.length; i++) {
                        if (input_data[i]['id'] == req.body[space][tileidx]['id']) {
                            console.log(input_data[i])
                            input_data[i]['category'] = "DELETE";
                            console.log(input_data[i])
                        }
                    }

                }
            }
            
            try {
                // fs.writeFileSync(path.join('data', 'input_data.json'), JSON.stringify(input_data));
                fs.writeFileSync('../../data/input_data.json', JSON.stringify(input_data));
            } catch (e) {
                console.log("hello");
            }

            
            res.status(200).json( {res: 'Success'})
            
            break;
                
    }
  }
