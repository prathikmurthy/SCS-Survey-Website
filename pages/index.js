import Head from 'next/head'
import Image from 'next/image'
import TitleBar from '../components/TitleBar.js';
import TileGrid from '../components/TileGrid.js';
import Footer from '../components/Footer.js';
import PlanningIdea from '../components/PlanningIdea.js';
import SurveyNavBar from '../components/NavBar.js';
import { useState, createContext, useContext } from 'react'
const axios = require('axios');


import input_rec_counts from '../data/input_rec_counts.json'
import input_data from '../data/input_data.json'



export default function App() {
  // axios.get('/api/db').then(function (response) {
  //   // console.log(response);
  // }).catch(function (error) {
  //   // console.log(error);
  // })


  // console.log(data)

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

  console.log(Object.keys(dict));

  return (

    <UserContext.Provider value={{count, setCount, list, setList, grid, setGrid}}>
      <div>
        {/* <SurveyNavBar /> */}
        <TitleBar />
        <div className="pb-20">
        
        { [Object.keys(dict).map( x => <TileGrid id={x} key={x} title={x} rec={input_rec_counts[x]} arr={dict[x]}/>)] }

        {/* <TileGrid title="Category 1" rec="3" arr={x}/>
        <TileGrid title="Category 2" rec="7" arr={y}/>
        <TileGrid title="Category 3" rec="2" arr={z}/> */}
        </div>
        <Footer />
        
      </div>
    </UserContext.Provider>



  );
}

export const UserContext = createContext();
// export default App;


