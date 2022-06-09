import {react, useState, useEffect} from 'react';
import { debounce } from '../utilities/debounce.js'
import { Link, animateScroll as scroll } from "react-scroll";

const spaces = ['Meeting Spaces', 'Private Office', 'Private Space', 'Semi-Private Space', 'Workstation']

export function SurveyNavBar() {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(false);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
        // console.log(currentScrollPos);
        setVisible((prevScrollPos > currentScrollPos) && currentScrollPos > 800);
    
        setPrevScrollPos(currentScrollPos);
    }, 5);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    
    }, [prevScrollPos, visible, handleScroll]);
    
    return (
        <header className="absolute sticky z-50 transition-all ease-in-out duration-500 border-b-2 border-green-600" style={{top: visible ? '0' : '-500px'}}>

        <div className="bg-[#191919]/75 backdrop-blur-md z-50 relative">
            <ul className="flex flex-row justify-between ml-10 mr-10 xl:ml-20 xl:mr-20">
                {spaces.map(x => {
                    return (
                        <li key={x} className="m-5 text-center text-white font-bold">
                            <Link to={x.split(" ").join('')} spy={true} smooth={true} duration={500} className="hover:border-b-2 border-green-700 transition-all ease-in-out">
                                {x}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
        </header>
    )
}

