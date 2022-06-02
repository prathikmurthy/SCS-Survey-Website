import {react} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function NavBar() {
    const navigation = ['Outdoor', 'Workstation', 'Private Office', 'Private Space', 'Support Space', 'Semi-Private Space', 'Meeting Spaces', 'Workplace'].sort()
    
    return (
        <header className="min-w-full pl-5 pr-5 bg-[#191919] flex flex-row sticky top-0 z-50">
            {navigation.map((item) =>
                <p className="text-white font-bold p-5 hover:border-b-2 border-black">
                    <Link activeclass='active' to={item} smooth={true} duration={500}>
                    {/* <button className="text-white font-bold p-5 hover:border-b-2 border-black" onClick={link(item)}>
                        {item}
                    </button> */}
                    {item}
                    </Link>
                </p>
            )}
        </header>
    )
}