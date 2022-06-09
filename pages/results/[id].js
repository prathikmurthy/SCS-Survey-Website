import { useRouter } from 'next/router'
import { ResultsNavBar } from "../../components/ResultsNavBar"
import TitleBar from '../../components/TitleBar.js';
import ResultTileGrid from '../../components/ResultTileGrid.js';
import Footer from '../../components/Footer.js';
import PlanningIdea from '../../components/PlanningIdea.js';
const axios = require('axios');
import useSWR from 'swr';
import {react, useState, useContext, createContext, useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';

 

export default function Category({id}) {
    const [count, setCount] = useState( 0 );

    // list = array of selected tiles
    const [list, setList] = useState( {} );
    
    // const [grid, setGrid] = useState( {} );
    const [ x, setX ] = useState(undefined)
    // const [y, setY] = useState(undefined);
    
    // const router = useRouter()
    // const { id } = router.query

    useEffect(() => {
        if (id) {
            console.log(x)
            
            setX(undefined)
        }
    }, [id])
    

    // useEffect(() => {`   1``
        //     if (id) setX(undefined)
    // }, [id])
    
    // console.log(router.query)


    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR(id ? '/api/results/'+id : null, fetcher);

    // console.log('/api/results/'+id);

    useEffect(() => {
        if (data) { 
            setX(data)
        };
    }, [data])
    
    if (!data || !x) return <div className="grid place-items-center h-screen"><CircularProgress sx={{color:'success.main'}} className="inset-0"/></div>;
    // if (!data || data['res'].length == 0) return "Loading...";
    
    console.log(x)

    if (x['res'].length == 0 && id == 'all') {
        return (
            <div>
                <ResultsNavBar />
                <h1 className="text-white text-4xl text-center font-bold pt-20">No Submissions Found</h1>
                <p className="text-slate-500 text-2xl text-center font-bold pt-5">It looks like no submissions have been made yet, please check back later!</p>
            </div>
        )
    } else if (x['res'].length == 0) {
        return (
            <div>
                <ResultsNavBar />
                <h1 className="text-white text-4xl text-center font-bold pt-20">No Submissions Found for Category: <span className="text-green-500">{id}</span></h1>
                <p className="text-slate-500 text-2xl text-center font-bold pt-5 max-w-xl m-auto">It looks like no submissions have been made for the selected category yet, please check back later!</p>
            </div>
        )

    }

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


export async function getServerSideProps(ctx) {
    const { id } = ctx.query;
    return {
      props: {
        id,
      },
    };
  }

export const UserContext = createContext();