import { react, useState, useEffect } from 'react';
import SelectionCount from './SelectionCount.js';
const axios = require('axios');
import SubmissionDialog from './Dialog.js';
import { Link, animateScroll as scroll } from "react-scroll";
import { debounce } from '../utilities/debounce.js'

export default function Footer(props) {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(false);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
    
        setVisible(currentScrollPos > props.minscroll);
    
        setPrevScrollPos(currentScrollPos);
    }, 10);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    
    }, [prevScrollPos, visible, handleScroll]);

    return (
        <footer className="w-full text-white font-bold p-4 sticky bg-[#191919]/75 backdrop-blur-md border-t-4 border-green-600 transition-all ease-in-out" style={{bottom: visible ? '0' : '-80px'}}>
            <div className="flex justify-around">
                <SelectionCount />
                <div>
                    <SubmissionDialog />      
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