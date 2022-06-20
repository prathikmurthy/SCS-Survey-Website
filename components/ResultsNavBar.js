import {react, useState, useEffect} from 'react';
import Dropdown from './Dropdown.js'
import { Transition } from '@headlessui/react'
import { debounce } from '../utilities/debounce.js'
// import { Link, animateScroll as scroll } from "react-scroll";
import Link from 'next/link'

export function ResultsNavBar() {

    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        setDropdown(true);
    }
    
    const onMouseExit = () => {
        setDropdown(false);
    }

    return (
        <header className="absolute sticky z-50 top-0 border-b-4 border-green-600">

        <div className="pl-5 pr-5 bg-[#191919]/75 backdrop-blur-md z-50 relative">
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
                <li className="p-5 text-white font-bold">
                    <Link href='/results/finalselection'>
                        <a>Final Selection</a>
                    </Link>
                </li>
                
            </ul>
        </div>
        </header>
    )
}