import { useRouter } from 'next/router'
import { ResultsNavBar } from "../../components/NavBar"
import TitleBar from '../../components/TitleBar.js';
import ResultTileGrid from '../../components/ResultTileGrid.js';
import Footer from '../../components/Footer.js';
import PlanningIdea from '../../components/PlanningIdea.js';
const axios = require('axios');
import useSWR from 'swr';
import {react, useState, useContext, createContext, useEffect} from 'react'
 

export default function Category() {
    const [count, setCount] = useState( 0 );

    // list = array of selected tiles
    const [list, setList] = useState( {} );
    
    // const [grid, setGrid] = useState( {} );
    const [ x, setX ] = useState(undefined)
    // const [y, setY] = useState(undefined);
    
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        if (id) {
            console.log(x)
            
            setX(undefined)
        }
    }, [id])
    

    // useEffect(() => {
        //     if (id) setX(undefined)
    // }, [id])
    
    // console.log(x)


    const fetcher = (url) => fetch(url, {method: 'POST', body: id}).then((res) => res.json());
    const { data, error } = useSWR(id ? '/api/test' : null, fetcher);

    useEffect(() => {
        if (data) { 
            setX(data)
        };
    }, [data])
    
    if (!data || !x) return "Loading...";
    // if (!data || data['res'].length == 0) return "Loading...";
    
    console.log(x)

    // console.log(data['res'])

    return (
        <UserContext.Provider value={{count, setCount, list, setList}}>
        <div className="mb-5">
            <ResultsNavBar />
            <ResultTileGrid id={id} key={id} title={id} rec={9} arr={x['res']}/>
            {/* {x['res'].map((m) => <p>{m.id}</p>)} */}
            {/* <h1>Slug: {id}</h1> */}
        </div>
        </UserContext.Provider>
    )
}

export const UserContext = createContext();