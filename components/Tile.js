import { react, useState, useContext } from 'react';
import {UserContext} from '../pages/index.js'
import Image from 'next/image'

export default function Tile(props) {

    const [color, setColor] = useState('bg-[#191919]')


    const update = () => {
        if (color == 'bg-[#191919]') {
            setColor('bg-green-500')
            add()
        } else {
            setColor('bg-[#191919]')
            sub()
        }
    }

    const {count, setCount, list, setList} = useContext(UserContext);

    const add = () => {
        setCount( count + 1 );
        list[props.grid].push(props.pi)
        console.log(list[props.grid].length)
    }

    const sub = () => {
        setCount( count - 1 );
        for (var i = 0; i < list[props.grid].length; i++) {
            if (list[props.grid][i] == props.pi) {
                list[props.grid].splice(i, 1);
            }
        }
    }

    // console.log(color)

    return (
        <div className = {`w-max-md pt-5 rounded-2xl ${color} hover:scale-110 pl-2 pr-2 transition ease-in-out` } >
            <div className="relative">
                <img src={props.pi.image} className="w-full rounded-xl"></img>                
                <button className="absolute inset-0 pl-4 pr-4 pt-2 pb-2 text-white text-center self-center align-middle font-bold rounded opacity-0 hover:opacity-100 bg-black/50 transition ease-in-out"> <a href={props.pi.url} target="_blank" rel="noreferrer">Details</a> </button> 
            </div>
            <p className="text-white font-bold text-center pt-5 "  onClick={update}>{props.pi.id}</p>
            {/* <p className="text-green-500 font-bold text-center pt-5"  onClick={update}>Views: {props.pi.views}</p> */}
            <p className="text-slate-500 italic text-center pt-5 pb-10" onClick={update}>{props.pi.notes != "" ? "Notes: " + props.pi.notes : props.pi.notes}</p>
            
        </div>
    )
}