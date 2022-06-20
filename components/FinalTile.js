import { react, useState, useContext } from 'react';
// import {UserContext} from '../pages/results/[id].js'
import {ResultContext} from '../pages/results/finalselection.js'

import Image from 'next/image'
import { paperClasses } from '@mui/material';

export default function FinalTile(props) {

    const [color, setColor] = useState('bg-[#191919]')

    let canSelect = false;


    const update = () => {
        if (color == 'bg-[#191919]') {
            setColor('bg-green-500')
            add()
        } else {
            setColor('bg-[#191919]')
            sub()
        }
    }

    // const {c, setC, l, setL} = useContext(ResultContext);

    // try {
    //     var ctx = UserContext;
    //     canSelect = true;
    // } catch (e) {
    //     // var {l, setL} = useContext(ResultContext);
    //     var ctx = ResultContext;
    // }

    
    
    
    var {c, setC, l, setL} = useContext(ResultContext);

    // try {

    //     canSelect = true

    // } catch (e) {
        
    // }

    const add = () => {
        setC( c + 1 );

        try {
            l=[props.pi.cat].push(props.pi)
        } catch (e) {
            l[props.pi.cat] = [props.pi]
        }
        console.log(l.length)
    }

    const sub = () => {
        setC( c - 1 );
        for (var i = 0; i < l[props.pi.cat].length; i++) {
            if (l[props.pi.cat][i] == props.pi) {
                l[props.pi.cat].splice(i, 1);
            }
        }
    }

    return (
        <div className = {`w-max-md pt-5 rounded-2xl ${color} hover:scale-110 pl-2 pr-2 transition ease-in-out` } >
            <div className="relative ">
                <img src={props.pi.image} className="w-full rounded-xl relative"></img>                
                <button className="absolute inset-0 pl-4 pr-4 pt-2 pb-2 text-white text-center self-center align-middle font-bold rounded opacity-0 hover:opacity-100 bg-black/50 transition ease-in-out"> <a href={props.pi.url} target="_blank" rel="noreferrer">Details</a> </button> 
            </div>
            <div onClick={canSelect ? update : null}>
                <p className="text-white font-bold text-center pt-5 " >{props.pi.id}</p>
                <p className="text-green-500 font-bold text-center pt-5"  >Votes: {props.pi.votes}</p>
                <p className="text-slate-500 italic text-center pt-5 pb-10">{props.pi.notes != "" ? "Notes: " + props.pi.notes : props.pi.notes}</p>
            </div>
            
        </div>
    )
}