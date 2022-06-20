import * as DialogPrimitive from '@radix-ui/react-dialog';
import {useContext, useState, useEffect } from 'react';
import { UserContext } from '../pages/index.js';
import { ResultContext } from '../pages/results/finalselection.js'

const axios = require('axios');

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogContent = DialogPrimitive.Content;
const DialogTitle = DialogPrimitive.Title;
const DialogDescription = DialogPrimitive.Description;
const DialogClose = DialogPrimitive.Close;

const SubmissionDialog = () => {
    
    // try {
    //     var ctx = UserContext;
    // } catch (e) {
    //     // var {list, setList} = useContext(ResultContext);.
    //     var ctx = ResultContext
    // }
    
    
    var {list, setList} = useContext(UserContext);
    
    const ClearSelections = () => {
        console.log(list);
        Object.keys(list).forEach(key => {
            list[key] = [];
        })
    }
    
    // const API_Post = () => {
    //     
    // }
    const API_Post = () => {

        // Data Aggregator
        axios.post('/api/data', {
            id: document.getElementById('input').value,
            data: JSON.parse(JSON.stringify(list)),
        }).then(function (response) {
            alert("Submission Successful! You can now close this page, thank you!")
        }).catch(function (error) {
            alert(error.response.data.res)
            return
        })

    }
    
    let out = []

    // console.log(list)

    for (var i = 0; i < Object.keys(list).length; i++) {
        out.push(
            <div className="grid grid-cols-2 p-2 ">
                <p className="font-bold text-left pl-5">{Object.keys(list)[i]}</p>
                <div>
                    <p className="text-right pr-5 text-green-500 font-bold text-l xl:text-xl">{list[Object.keys(list)[i]].length} Selected</p>
                </div>
            </div>
            
            )
    }

    return (
    <Dialog>
        <DialogTrigger asChild>
            <button className="pl-4 pr-4 pt-2 pb-2 bg-green-500 hover:bg-green-700 text-white font-bold rounded">Submit</button> 
        </DialogTrigger>
        <DialogPrimitive.Portal>
            <div className="overflow-auto ">

            <DialogPrimitive.Overlay className="bg-black/50 fixed inset-0">
                <DialogContent className="bg-[#191919]/95 rounded-2xl fixed mx-auto my-auto inset-0 max-w-xl xl:max-w-3xl max-h-fit animate-open">
                    <div className="pt-10 pb-10 ">

                    <DialogTitle className="text-white font-bold text-xl xl:text-3xl text-center pb-10">Review Submission</DialogTitle>
                    <DialogDescription>
                        <p className="text-white text-l xl:text-xl text-center">{out}</p>
                    </DialogDescription>
                    
                    <div className="grid grid-cols-2 pt-3 xl:pt-10">
                        <input className="ml-5 bg-gray-500 text-white text-bold text-m xl:text-2xl text-center rounded-2xl" id="input" type="text" placeholder="Enter Steelcase Email"></input>

                        <div className="mx-auto">
                            <DialogClose>
                                <button className="pl-8 pr-8 pt-4 pb-4 bg-green-500 hover:bg-green-700 text-white text-s xl:text-xl font-bold rounded-xl" onClick={API_Post}>
                                    ✓    
                                </button> 
                            </DialogClose>
                        </div>

                    </div>

                    </div>
                </DialogContent>
            </DialogPrimitive.Overlay>
            </div>
        </DialogPrimitive.Portal>
    </Dialog>

    )
}

export default SubmissionDialog;