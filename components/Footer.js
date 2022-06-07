import { react } from 'react';
import SelectionCount from './SelectionCount.js';
const axios = require('axios');
import MyDialog from './Dialog.js';
import { Link, animateScroll as scroll } from "react-scroll";





export default function Footer(props) {
    return (
        <footer className="w-full text-white font-bold p-4 sticky bottom-0 bg-[#191919]/75 backdrop-blur-md border-t-4 border-green-600">
            <div className="flex justify-around">
                <SelectionCount />
                {/* <Alert /> */}
                <div>
                    {/* <InfoDialog />    */}
                    {/* <Tool />    */}
                    <MyDialog />      
                    <Link to='info' spy={true} smooth={true} duration={500} className="ml-20">
                        <button className="p-2 bg-slate-800 text-white font-bold rounded-full outline hover:outline-double outline-hidden outline-slate-800 hover:outline-green-700 hover:outline-8 transition-all ease-in-out hover:outline-offset-4">
                            <span className="text-xl pl-2 pr-2">?</span>
                        </button> 
                    </Link>         
                </div>
            </div>
        
      </footer>
    )
}