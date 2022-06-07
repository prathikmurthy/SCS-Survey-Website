import {react, useState} from 'react';
import Link from 'next/link'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const spaces = ['Outdoor', 'Workstation', 'Private Office', 'Private Space', 'Support Space', 'Semi-Private Space', 'Meeting Spaces', 'Workplace'].sort()

export default function Dropdown() {
    return (
        <div className="absolute bg-green-600 p-5 -left-12 top-5 shadow-inner rounded-t-none text-center rounded drop-shadow-2xl">

            <ul>
                {spaces.map((space) => {
                    return (
                        <li key={space} className="font-bold text-white p-2">
                            <Link href={'/results/' + space}>
                                {space}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
