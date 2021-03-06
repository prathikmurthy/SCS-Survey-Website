import { ResultsNavBar } from "../../components/ResultsNavBar"
import {react, useState, useContext, createContext, useEffect} from 'react'
import useSWR from 'swr';
import CircularProgress from '@mui/material/CircularProgress';
import FinalTileGrid from '../../components/FinalTileGrid.js';
import FinalFooter from '../../components/FinalFooter.js'



export default function FinalSelection() { 
    const [count, setCount] = useState( 0 );

    // list = array of selected tiles
    const [list, setList] = useState( {} );

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/results/all', fetcher);
    
    if (!data) return <div className="grid place-items-center h-screen"><CircularProgress sx={{color:'success.main'}} className="inset-0"/></div>;
    // if (!data || data['res'].length == 0) return "Loading...";
    
    // console.log(data)
    let dict = {}
    data['res'].forEach(element => {
        try {
            dict[element.cat].push(element)
        } catch (e) {
            dict[element.cat] = []
            dict[element.cat].push(element)
        }
    })

    
    // console.log(dict)

    return (
        <ResultContext.Provider value={{count, setCount, list, setList}}>
            <div>
                <ResultsNavBar />
                <div className="pb-20">
            
                    { [Object.keys(dict).map( x => <section key={x} id={x.split(" ").join('')}><FinalTileGrid title={x} rec={9} arr={dict[x]}/></section>)] }

                </div>
                <FinalFooter minscroll={0}/>
            </div>
        </ResultContext.Provider>
    )
}
export const ResultContext = createContext();
