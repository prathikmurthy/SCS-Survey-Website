import {react, useState} from 'react';
// import { Link, animateScroll as scroll } from "react-scroll";
import Link from 'next/link'
import Dropdown from '../components/Dropdown.js'
import { Transition } from '@headlessui/react'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const spaces = ['Outdoor', 'Workstation', 'Private Office', 'Private Space', 'Support Space', 'Semi-Private Space', 'Meeting Spaces', 'Workplace'].sort()

export function SurveyNavBar() {
    
    return (
        <></>
        // <header className="min-w-full pl-5 pr-5 bg-[#191919] flex flex-row sticky top-0 z-50">
        //     {spaces.map((item) =>
        //         <p className="text-white font-bold p-5 hover:border-b-2 border-black">
        //             <Link activeclass='active' to={item} smooth={true} duration={500}>
        //             {/* <button className="text-white font-bold p-5 hover:border-b-2 border-black" onClick={link(item)}>
        //                 {item}
        //             </button> */}
        //             {item}
        //             </Link>
        //         </p>
        //     )}
        // </header>
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
        <div className="pl-5 pr-5 bg-[#191919] z-50 relative">
            <ul className="flex flex-row">
                <li className="p-5 text-white font-bold">
                    <Link href='/results/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li className="p-5 text-white font-bold" onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit}>
                    <Link href='/results/all'>
                        <a>Spaces</a>
                    </Link>
                    {/* {dropdown && <Dropdown className=""/>} */}
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
                
                {/* {items.map((item) => <li className="p-5 text-white font-bold"><Link href={"/results/"+item.link}><a>{item.name}</a></Link></li>)} */}
                {/* <li>
                    <Link href="/results">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/results/test1">
                        <a>test1</a>
                    </Link>
                </li>
                <li>
                    <Link href="/results/test2">
                        <a>test2</a>
                    </Link>
                </li> */}
            </ul>
        </div>
    )
}