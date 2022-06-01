import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import TitleBar from '../components/TitleBar.js';
import TileGrid from '../components/TileGrid.js';
import Footer from '../components/Footer.js';
import PlanningIdea from '../components/PlanningIdea.js';
import { useState, createContext, useContext } from 'react'
import { input_data, input_rec_counts } from '../data/input.js';
const axios = require('axios');


// import MyDialog from '../components/Dialog.js';


export default function App() {
  axios.get('/api/db').then(function (response) {
    // console.log(response);
  }).catch(function (error) {
    // console.log(error);
  })

  const [count, setCount] = useState( 0 );
  const [list, setList] = useState( {} );
  const [grid, setGrid] = useState( {} );

  let dict = {}


  for (var i = 0; i < input_data.length; i++) {
    try {
      dict[input_data[i]['category']].push(new PlanningIdea(...Object.values(input_data[i])))
    } catch (e) {
      dict[input_data[i]['category']] = []
      dict[input_data[i]['category']].push(new PlanningIdea(...Object.values(input_data[i])))
    }
  }

  return (

    <UserContext.Provider value={{count, setCount, list, setList, grid, setGrid}}>
      <div>
        <TitleBar />
        <div className="pb-20">
        
        { [Object.keys(dict).map( x => <TileGrid key={x} title={x} rec={input_rec_counts[x]} arr={dict[x]}/>)] }

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


