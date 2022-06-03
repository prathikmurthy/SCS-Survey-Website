import {react, useState} from 'react';
// import { Link, animateScroll as scroll } from "react-scroll";
import Link from 'next/link'
import Dropdown from '../components/Dropdown.js'
import { Transition } from '@headlessui/react'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// const spaces = ['Outdoor', 'Workstation', 'Private Office', 'Private Space', 'Support Space', 'Semi-Private Space', 'Meeting Spaces', 'Workplace'].sort()
const spaces = ['Meeting Spaces', 'Outdoor', 'Private Office', 'Private Space', '🔝', 'Semi-Private Space', 'Support Space', 'Workplace', 'Workstation']

export function SurveyNavBar() {
    
    return (
        <header className="absolute top-0 sticky z-50">

        <div className="bg-[#191919] z-50 relative">
            <ul className="flex flex-row justify-between ml-10 mr-10">
                {spaces.map(x => {
                    return (
                        <li key={x} className="m-5 text-center text-white font-bold">
                            <a href={x != '🔝' ? '#'+x.split(" ").join('') : '#top'}>
                                {x}
                            </a>
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