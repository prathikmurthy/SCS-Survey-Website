import { ResultsNavBar } from "../../components/ResultsNavBar"
import useSWR from 'swr';
import {react, useState, useContext, createContext, useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';


export default function Home() {
    const [ x, setX ] = useState(undefined)
    const [ y, setY ] = useState(undefined)


    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data: mdata, error: derror } = useSWR('/api/results/all', fetcher);
    const { data: count, error: cerror } = useSWR('/api/data', fetcher);

    if (!mdata || !count) return <div className="grid place-items-center h-screen"><CircularProgress sx={{color:'success.main'}} className="inset-0"/></div>;

    let votes = 0;
    let votes_by_cat = {}
    mdata['res'].forEach(element => {
        votes_by_cat[element.cat] == undefined ? votes_by_cat[element.cat] = element.votes : votes_by_cat[element.cat] += element.votes
        votes += element.votes;
    });

    
    
    function findPopularCat(votes_by_cat) {
        // console.log(votes_by_cat)
        var out = ""
        var max = undefined
        for (var cat in votes_by_cat) {
            // console.log(votes_by_cat[cat])
            // console.log(running_total)
            if (votes_by_cat[cat] == max) {
                out += " and "
                out += cat
            } else if (votes_by_cat[cat] > max || max == undefined) {
                out = cat
                max = votes_by_cat[cat];
            }
        }
        // console.log(out)
        return [out, max]
    }




    return (
        <div>
            <ResultsNavBar />
            <div className="pt-2 max-w-xl m-auto">
                <p className="xl:text-6xl text-2xl text-green-500 font-bold text-center xl:pb-10 xl:pt-10 pt-0 pb-0">At A Glance...</p>
                <p className="text-white xl:text-2xl text-md text-center pt-2 xl:pb-10">There have been <span className="text-green-500">{count['res'].length}</span> unique submission(s) since this survey went live.</p>
                <p className="text-white xl:text-2xl text-md text-center pt-2 xl:pb-10">Of those submission(s), <span className="text-green-500">{votes}</span> total votes have been cast for <span className="text-green-500">{mdata['res'].length}</span> unique planning ideas.</p>
                <p className="text-white xl:text-2xl text-md text-center pt-2 xl:pb-10">The most popular category amongst voters appears to be <span className="text-green-500">{findPopularCat(votes_by_cat)[0]}</span>, with <span className="text-green-500">{findPopularCat(votes_by_cat)[1]}</span> total votes.</p>
                <p className="text-gray-400 xl:text-lg text-md text-center pt-5">This page will automatically update when new submissions are created.</p>
                <p className="text-gray-400 xl:text-lg text-md text-center pt-5">Further information can be found in the <span className="text-green-500">Analysis</span> section.</p>
                
            </div>
        </div>
    )
}