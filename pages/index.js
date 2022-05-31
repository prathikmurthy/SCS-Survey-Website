import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import TitleBar from '../components/TitleBar.js';
import TileGrid from '../components/TileGrid.js';
import Footer from '../components/Footer.js';
import PlanningIdea from '../components/PlanningIdea.js';
import { useState, createContext, useContext } from 'react'
import { input } from '../data/setup.js';
const axios = require('axios');


// import MyDialog from '../components/Dialog.js';


export default function App() {
  axios.get('/api/db').then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  })

  // return( <></> ) 
  const [count, setCount] = useState( 0 );
  const [list, setList] = useState( {} );
  const [grid, setGrid] = useState( {} );
  // const [init, setInit] = useState( 0 );
  // var selections = {};

  let dict = []
  for (var i = 0; i < input.length; i++) {
    dict[input[i]['cat']] = [input[i]['rec'],[]];
    for (var j = 0; j < input[i]['data'].length; j++) {
      // console.log(Object.values(input[i]['data'][j]))
      dict[input[i]['cat']][1].push(new PlanningIdea(...Object.values(input[i]['data'][j])));
    }
  }

  console.log(Object.keys(dict));

  

  // console.log(dict['Category 1']);

  // Build()

  return (

    <UserContext.Provider value={{count, setCount, list, setList, grid, setGrid}}>
      <div>
        <TitleBar />
        <div className="pb-20">
        
        { [Object.keys(dict).map( x => <TileGrid key={x} title={x} rec={dict[x][0]} arr={dict[x][1]}/>)] }

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


