import { ResultsNavBar } from "../../components/ResultsNavBar"
import useSWR from 'swr';
import {react, useState, useContext, createContext, useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';


export default function Home() {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data: mdata, error: derror } = useSWR('/api/results/all', fetcher);
    const { data: count, error: cerror } = useSWR('/api/data', fetcher);
    const { data: submissions, error: serror } = useSWR('/api/getsubmissions', fetcher);


    if (!mdata || !count || !submissions) return <div className="grid place-items-center h-screen"><CircularProgress sx={{color:'success.main'}} className="inset-0"/></div>;

    let votes = 0;
    let votes_by_cat = {}
    mdata['res'].forEach(element => {
        votes_by_cat[element.cat] == undefined ? votes_by_cat[element.cat] = element.votes : votes_by_cat[element.cat] += element.votes
        votes += element.votes;
    });

    let rawdata = []
    rawdata = submissions['res'].map((x) => {
        return <div key={x.id} className="grid grid-cols-2 text-white text-2xl p-5 divide-x-2 divide-slate-300/75">
                    <p>{x.id}</p>
                    <p className="pl-10 text-xl">{x.date}</p>
                </div>
    })

    return (
        <div>
            <ResultsNavBar />
            <div className="pt-2 max-w-xl m-auto">
                <p className="xl:text-6xl text-2xl text-green-500 font-bold text-center xl:pb-10 xl:pt-5 pt-0 pb-0">At A Glance...</p>
                <p className="text-white xl:text-2xl text-md text-center pt-2 xl:pb-10">There have been <span className="text-green-500">{count['res'].length}</span> unique submission(s) since this survey went live.</p>
                <p className="text-gray-400 xl:text-lg text-md text-center pt-5 mb-10">Further information can be found in the <span className="text-green-500">Analysis</span> section.</p>
                
                <p className="xl:text-4xl text-2xl text-green-500 font-bold text-center xl:pb-10 xl:pt-5 pt-0 pb-0">Recent Submissions</p>
                <div className="divide-y-2 divide-slate-300/25">
                <div className="grid grid-cols-2 text-white text-center pb-2">
                    <p>Email</p>
                    <p>Date</p>
                </div>
                {rawdata}
                </div>
                <p className="text-gray-400 xl:text-lg text-md text-center pt-5 mb-10">This page will automatically update when new submissions are created.</p>
                
            </div>
        </div>
    )
}