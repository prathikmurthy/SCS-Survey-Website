import * as DialogPrimitive from '@radix-ui/react-dialog';
import {useContext, useState, useEffect } from 'react';
import { UserContext } from '../pages/index.js';
const axios = require('axios');

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogContent = DialogPrimitive.Content;
const DialogTitle = DialogPrimitive.Title;
const DialogDescription = DialogPrimitive.Description;
const DialogClose = DialogPrimitive.Close;

const MyDialog = () => {
    
    const {list, setList} = useContext(UserContext);
    
    const ClearSelections = () => {
        console.log(list);
        Object.keys(list).forEach(key => {
            list[key] = [];
        })
    }
    
    const API_Post = () => {
        // console.log(JSON.stringify(list));
        // axios.post('/api/db', {
        //     id: document.getElementById('input').value,
        //     data: JSON.parse(JSON.stringify(list)),
        // }).then(function (response) {
        //     alert("Submission Successful! You can now close this page, thank you!")
        // }).catch(function (error) {
        //     alert("ERROR: An error occured while processing your submission, please try again later.")
        // })

        axios.delete('/api/data', {
            data: JSON.parse(JSON.stringify(list)),
        }).then(function (response) {
            alert("Submission Successful! You can now close this page, thank you!")
        }).catch(function (error) {
            alert("ERROR: An error occured while processing your submission, please try again later.")
        })

        
    }

    let out = []
    for (var i = 0; i < Object.keys(list).length; i++) {
        out.push(
            <div className="grid grid-cols-2 p-2 ">
                <p className="font-bold text-left pl-5">{Object.keys(list)[i]}</p>
                <div>
                    {/* { [list[Object.keys(list)[i]].map(x => <p key={x} className="text-right pr-5 text-l xl:text-xl">{x.id}</p>)] } */}
                    {/* { [list[Object.keys(list)[i]].map(x => )] } */}
                    <p className="text-right pr-5 text-green-500 font-bold text-l xl:text-xl">{list[Object.keys(list)[i]].length} Selected</p>
                </div>
            </div>
            
            )
        // for (var j = 0; j < list[Object.keys(list)[i]].length; j++) {
        // //     out.push(<p>{[list[Object.keys(list)[i]][j].id] + ':' + Object.keys(list)[i]}</p>)
        // // }
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
                        <input className="ml-5 bg-gray-500 text-white text-bold text-m xl:text-2xl text-center rounded-2xl" id="input" type="text" placeholder="Enter Steelcase Username"></input>

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

export default MyDialog;


// export default function MyDialog() {
//   <Dialog.Root>
//     <Dialog.Trigger asChild>
//         <button className="text-white text-3xl bg-white">Open Menu</button>
//     </Dialog.Trigger>
//     <Dialog.Portal>
//       <Dialog.Overlay />
//       <Dialog.Content>
//         <Dialog.Title>Hello World</Dialog.Title>
//         <Dialog.Description>Test Test Test Test Test Test Test Test Test</Dialog.Description>
//         <Dialog.Close />
//       </Dialog.Content>
//     </Dialog.Portal>
//   </Dialog.Root>
// }