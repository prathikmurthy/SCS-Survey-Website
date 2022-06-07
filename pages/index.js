import Head from 'next/head'
import Image from 'next/image'
import TitleBar from '../components/TitleBar.js';
import TileGrid from '../components/TileGrid.js';
import Footer from '../components/Footer.js';
import PlanningIdea from '../components/PlanningIdea.js';
import {SurveyNavBar} from '../components/NavBar.js';
import { useState, createContext, useContext } from 'react'
const axios = require('axios');
import scs from '../res/scs-logo.png'
import imo from '../res/imo-logo.png'
import { Scrollbars } from 'react-custom-scrollbars';



import input_rec_counts from '../data/input_rec_counts.json'
import input_data from '../data/input_data.json'



export default function App() {
  
  const [count, setCount] = useState( 0 );
  const [list, setList] = useState( {} );
  const [grid, setGrid] = useState( {} );
  let dict = {}


  for (var i = 0; i < input_data.length; i++) {
    try {
      if (input_data[i]['category'] != 'DELETE') {
        dict[input_data[i]['category']].push(new PlanningIdea(...Object.values(input_data[i])))
      }
    } catch (e) {
      dict[input_data[i]['category']] = []
      dict[input_data[i]['category']].push(new PlanningIdea(...Object.values(input_data[i])))
    }
  }

  // console.log(Object.keys(dict));

  return ( 

    <UserContext.Provider value={{count, setCount, list, setList, grid, setGrid}}>

      <div id="info">
        <SurveyNavBar />
        <TitleBar />
        <div className="pb-20">
        
        { [Object.keys(dict).map( x => <section key={x} id={x.split(" ").join('')}><TileGrid title={x} rec={input_rec_counts[x]} arr={dict[x]}/></section>)] }

        </div>
        <div className="grid grid-cols-3 mt-10 max-w-2xl max-h-xl m-auto">
          <Image src={scs} layout='intrinsic'></Image>
          <button className="bg-green-500 rounded-full text-xl ml-24 mr-24 mt-10 mb-10 text-green-500">\t</button>
          <Image src={imo} layout='intrinsic'></Image>
        </div>
                
        <p className="text-white text-xs xl:text-md text-center pt-4 pb-4">Created by the Innovation Management Office - 2022</p>
        <Footer />
        
      </div>
    </UserContext.Provider>

  );
}

export const UserContext = createContext();


