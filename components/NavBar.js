import {react, useState, useEffect} from 'react';
import Dropdown from '../components/Dropdown.js'
import { Transition } from '@headlessui/react'
import { debounce } from '../utilities/debounce.js'
import { Link, animateScroll as scroll } from "react-scroll";

const spaces = ['Meeting Spaces', 'Outdoor', 'Private Office', 'Private Space', 'Semi-Private Space', 'Support Space', 'Workplace', 'Workstation']

export function SurveyNavBar() {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
    
        setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
    
        setPrevScrollPos(currentScrollPos);
    }, 25);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    
    }, [prevScrollPos, visible, handleScroll]);
    
    return (
        <header className="absolute sticky z-50 transition-all ease-in-out border-b-2 border-green-600" style={{top: visible ? '0' : '-60px'}}>

        <div className="bg-[#191919]/75 backdrop-blur-md z-50 relative">
            <ul className="flex flex-row justify-between ml-10 mr-10">
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

export function ResultsNavBar() {
    const items = [
        {
            name: 'Home',
            link: ''
        },
        {
            name: 'Spaces',
            link: 'all'
        },
        {
            name: 'Analysis',
            link: 'analysis'
        }
    ]

    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        setDropdown(true);
    }
    
    const onMouseExit = () => {
        setDropdown(false);
    }

    return (
        <header className="absolute top-0 sticky z-50">

        <div className="pl-5 pr-5 bg-[#191919] z-50 relative">
            <ul className="flex flex-row justify-between max-w-xl m-auto">
                <li className="p-5 text-white font-bold">
                    <Link href='/results/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li className="p-5 text-white font-bold" onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit}>
                    <Link href='/results/all'>
                        <a>Spaces</a>
                    </Link>
                    <Transition
                        show={dropdown}
                        enter="transition ease-in-out duration-100 transform"
                        enterFrom="scale-0"
                        enterTo="scale-100"
                        leave="transition ease-in-out duration-100 transform"
                        leaveFrom="scale-100"
                        leaveTo="scale-0" >
                            <Dropdown />
                    </Transition>
                </li>
                <li className="p-5 text-white font-bold">
                    <Link href='/results/analysis'>
                        <a>Analysis</a>
                    </Link>
                </li>
                
            </ul>
        </div>
        </header>
    )
}