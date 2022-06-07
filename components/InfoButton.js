import {react} from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {useContext, useState, useEffect } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';


const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogContent = DialogPrimitive.Content;
const DialogTitle = DialogPrimitive.Title;
const DialogDescription = DialogPrimitive.Description;
const DialogClose = DialogPrimitive.Close;


export const InfoDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="p-2 mr-36 bg-slate-800 text-white font-bold rounded-full outline hover:outline-double outline-hidden outline-slate-800 hover:outline-green-700 hover:outline-8 transition-all ease-in-out hover:outline-offset-4">
                    <span className="text-xl pl-2 pr-2">?</span>
                </button> 
            </DialogTrigger>
            <DialogPrimitive.Portal>
                <div className="overflow-auto ">
    
                <DialogPrimitive.Overlay className="bg-black/50 fixed inset-0">
                    <DialogContent className="bg-[#191919]/95 rounded-2xl fixed mx-auto my-auto inset-0 max-w-xl xl:max-w-3xl max-h-fit animate-open">
                        <div className="pt-10 pb-10 ">
    
                        <DialogTitle className="text-white font-bold text-xl xl:text-3xl text-center pb-10">Instructions</DialogTitle>
                        <DialogDescription className="ml-16 mr-16">
                            <p className="text-white text-sm xl:text-xl text-center ">This survey has been created to determine the 50 most popular Steelcase Space Planning Ideas, please scroll through the ideas shown on this page and choose your personal favorites.</p>
                            <p className="text-white text-sm xl:text-xl text-center pt-2">The Planning Idea tiles have not been sorted in any particular order. A tile can be selected by clicking on any of the black space contained within the tile.</p>
                            <p className="text-white text-sm xl:text-xl text-center pt-2">For further information, clicking on the provided image within the tile will take you to the Steelcase website with further details.</p>
                            <p className="text-white text-sm xl:text-xl text-center pt-2 pb-3">After you've made your selections, please click the <span className="text-green-400">Submit</span> button at the bottom of the screen. This information screen can be shown again by clicking the <span className="text-green-400">?</span> button also at the bottom of the screen.</p>
                        </DialogDescription>
                        
                        {/* <div className="grid grid-cols-2 pt-3 xl:pt-10">
                            <input className="ml-5 bg-gray-500 text-white text-bold text-m xl:text-2xl text-center rounded-2xl" id="input" type="text" placeholder="Enter Steelcase Username"></input>
    
                            <div className="mx-auto">
                                <DialogClose>
                                    <button className="pl-8 pr-8 pt-4 pb-4 bg-green-500 hover:bg-green-700 text-white text-s xl:text-xl font-bold rounded-xl">
                                        ✓    
                                    </button> 
                                </DialogClose>
                            </div>
    
                        </div> */}
                        </div>
                    </DialogContent>
                </DialogPrimitive.Overlay>
                </div>
            </DialogPrimitive.Portal>
        </Dialog>
    
        )
    }
export const Tool = () => (
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger >
                {/* <button>Hello</button> */}
                <InfoDialog />
            </Tooltip.Trigger>
            <Tooltip.Content>
                {/* <p>Hello World</p> */}
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      );