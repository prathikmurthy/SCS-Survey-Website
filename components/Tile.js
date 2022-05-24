import { react, useState, useContext } from 'react';
import {UserContext} from '../pages/index.js'

export default function Tile(props) {

    const [color, setColor] = useState('[#191919]')
    // var title;

    // if (props.title == undefined) {
    //     title = 'Tile'
    // } else {
    //     title = props.title
    // }



    const update = () => {
        if (color == '[#191919]') {
            setColor('green-500')
            add()
        } else {
            setColor('[#191919]')
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

    return (
        <div className = {`pt-5 pb-10 rounded-2xl bg-${color} hover:scale-110 pl-2 pr-2 transition ease-in-out` } onClick={update} >
            <div className="relative">
                <img src="https://picsum.photos/400/300" className="w-full rounded-xl"></img>
                <button className="absolute inset-0 pl-4 pr-4 pt-2 pb-2 text-white font-bold rounded opacity-0 hover:opacity-100 bg-black/50 transition ease-in-out">Details</button> 
            </div>
            <p className="text-white font-bold text-center pt-5 ">{props.pi.id}</p>
            {/* <Selection />                 */}
            <p className="text-slate-500 italic text-center pt-5">NOTE: {props.pi.notes}</p>
            
        </div>
    )
}