import {react, useContext, useEffect} from 'react';
import { UserContext } from '../pages/index.js' 
import Tile from './Tile.js';

export default function TileGrid(props) {
  
  const {list, setList, grid, setGrid} = useContext(UserContext);
  
  if (grid[props.title] == undefined) {
        console.log(props.arr.length)
    
        list[props.title] = []
        grid[props.title] = []
        
        for (let x = 0; x < props.arr.length; x++) {
            // const x = Math.round((Math.random() * 1000));
            // const x = props.arr[x].name;
            grid[props.title].push(
              <div className="flex justify-center" key={x}>
                <Tile pi={props.arr[x]} grid={props.title}/>
              </div>
        
            )
        }
    }


    return (
        <div className="container mx-auto pt-20 pl-10 pr-10">
        <div className="grid grid-cols-1 divide-y divide-slate-700">
        <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold text-white divide-white pb-3 ">{props.title} • {props.rec} Recommended</h1>
        <h1 className="text-2xl font-bold text-green-500 divide-white pb-3">{list[props.title].length} Currently Selected</h1>
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-3">

          {grid[props.title]}

        </div>
        
        </div>
      </div>
    )
}