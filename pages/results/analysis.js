import { ResultsNavBar } from "../../components/ResultsNavBar"
import useSWR from 'swr';
import {react, useState, useContext, createContext, useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
// import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


export default function Analysis() {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data: mdata, error: derror } = useSWR('/api/results/all', fetcher);
    const { data: count, error: cerror } = useSWR('/api/data', fetcher);
    const { data: submissions, error: serror } = useSWR('/api/getsubmissions', fetcher);

    if (!mdata || !count || !submissions) return <div className="grid place-items-center h-screen"><CircularProgress sx={{color:'success.main'}} className="inset-0"/></div>;

    console.log(count)
    if (submissions['res'].length == 0) {
        return (
            <div>
                <ResultsNavBar />
                <h1 className="text-white text-4xl text-center font-bold pt-20">No Submissions Found</h1>
                <p className="text-slate-500 text-2xl text-center font-bold pt-5">It looks like no submissions have been made yet, please check back later!</p>
            </div>
        )
    }

    let votes = 0;
    let votes_by_cat = {}
    mdata['res'].forEach(element => {
        votes_by_cat[element.cat] == undefined ? votes_by_cat[element.cat] = element.votes : votes_by_cat[element.cat] += element.votes
        votes += element.votes;
    });
    
    let cats = []
    let votes_list = []
    for (var cat in votes_by_cat) {
        cats.push(cat)
        votes_list.push(votes_by_cat[cat])
    }

    function findPopularCat(votes_by_cat) {
        // console.log(votes_by_cat)
        var out = ""
        var max = undefined
        for (var cat in votes_by_cat) {
            if (votes_by_cat[cat] == max) {
                out += " and "
                out += cat
            } else if (votes_by_cat[cat] > max || max == undefined) {
                out = cat
                max = votes_by_cat[cat];
            }
        }
        return [out, max]
    }

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: cats,
        datasets: [
          {
            label: '# of Votes',
            data: votes_list,
            backgroundColor: [
                '#22c55e',
                '#ef4444',
                '#eab308',
                '#0ea5e9',
                '#8b5cf6',
            ],
            borderColor: [
                '#282c34'
            ],
            borderWidth: 15,
          },
        ],
    };

    const options = {
        legend: {
            display: false
        }
    }


    console.log(submissions['res'])

    let rawdata = []
    rawdata = submissions['res'].map((x) => {
        return <div key={x.id}className="grid grid-cols-2 text-white text-2xl p-5 ">
                    <p>{x.id}</p>
                    <div className="grid grid-cols-5 ">
                        {cats.map((cat) => {
                            return <p className="p-2" key={cat}>{x.data[cat].length}</p>
                        })}
                    </div>
                </div>
    })


    console.log(rawdata)


    return (
        <div className="mb-10">
            <ResultsNavBar />
            <div className="max-w-4xl m-auto ">
                {/* <p className="text-gray-400 xl:text-lg text-md text-center pt-5">This Page will automatically update when new submissions are created.</p> */}
                <p className="text-white xl:text-2xl text-md text-center pt-5 xl:pb-10">There have been <span className="text-green-500">{count['res'].length}</span> unique submission(s) since this survey went live.</p>
                {
                    count['res'].length > 0 ? <div><p className="text-white xl:text-2xl text-md text-center pt-2 xl:pb-10">Of those submission(s), <span className="text-green-500">{votes}</span> total votes have been cast for <span className="text-green-500">{mdata['res'].length}</span> unique planning ideas.</p>
                    <p className="text-white xl:text-2xl text-md text-center pt-2 xl:pb-10">The most popular category amongst voters appears to be <span className="text-green-500">{findPopularCat(votes_by_cat)[0]}</span>, with <span className="text-green-500">{findPopularCat(votes_by_cat)[1]}</span> total votes.</p>
                    </div> : null
                }

                <div className="grid grid-cols-2 divide-x-2 divide-slate-300/25 mt-5">
                    <div className="pr-5">
                        <p className="xl:text-4xl text-xl text-green-500 font-bold text-center xl:mt-10 pt-0 pb-14">Total Votes per Category</p>

                        <Doughnut data={data} options={options}/>
                    </div>
                    <div className="pl-5">
                        <p className="xl:text-4xl text-xl text-green-500 font-bold text-center xl:mt-10 pt-0 pb-5">Median Votes per Category per Submission</p>

                        <Doughnut data={data} options={options}/>
                    </div>
                </div>

            </div>
            <p className="xl:text-4xl text-xl text-green-500 font-bold text-center xl:pt-10 pt-0 pb-5">Raw Data</p>
            <div className="max-w-6xl m-auto divide-y-2 divide-slate-300/25">
                <div className="grid grid-cols-2 p-5"><p className="text-slate-400 font-bold"></p>
                    <div className="grid grid-cols-5 ">
                        {cats.map((cat) => {
                            return <p key={cat} className="p-2 text-sm text-slate-400 font-bold">{cat}</p>
                        })}
                    </div>
                </div>
                {rawdata}
            </div>
        </div>
    )
}