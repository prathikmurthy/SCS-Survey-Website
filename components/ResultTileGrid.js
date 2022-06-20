import {react, useContext, useEffect} from 'react';
// import { UserContext } from '../pages/results/[id].js' 
import ResultTile from './ResultTile.js';

export default function ResultTileGrid(props) {
  
  // const {list, setList} = useContext(UserContext);

  let grid = []
  for (let x = 0; x < props.arr.length; x++) {
      grid.push(
        <div className="flex justify-center" key={x}>
          <ResultTile pi={props.arr[x]} />
        </div>
  
      )
  }


    return (
        <div className="container mx-auto pt-10 pl-10 pr-10">
        <div className="grid grid-cols-1 divide-y divide-slate-700">
        <h1 className="text-2xl font-bold text-white divide-white pb-3 text-center">{props.title == "all" ? 'All Results' : props.title}</h1>
        
        <div className="grid grid-cols-3 gap-4 pt-3">

          {grid}

        </div>
        
        </div>
      </div>
    )
}