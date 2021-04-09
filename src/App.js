import React, { useEffect, useState } from 'react'
import axios from "axios";
import Balls from './Components/Balls'
import Categories from './Components/Categories'

import './App.css';
// import { getJoke } from './Components/API'
import Display from './Components/Display'

const App = () => {
  const [data, setData] = useState({
    category: 'Any',
    type: 'type',
    setup: '',
    delivery: '',
  })

  

  const options = {
    method: 'GET',
    url: `https://jokeapi-v2.p.rapidapi.com/joke/${data.category}`,
    params: {
      contains: '',
      format: 'json',
      blacklistFlags: '',
      idRange: '',
      type: 'twopart'
    },
    headers: {
      'x-rapidapi-key': 'cf00cd8fa6msh9ad184c1cef59cbp129983jsn7aafbe866814',
      'x-rapidapi-host': 'jokeapi-v2.p.rapidapi.com'
    }
  };
  
  const getJoke = () => {

   axios.request(options).then(function (response) {
      console.log('success')
      setData(response.data)
      console.log(response.data)
  }).catch(function (error) {
      console.log('error')
      console.error(error);
      alert("Internal Error, Api may be offline. Try again.")
  });
}

useEffect(() => {
  // Update the document title using the browser API
  getJoke()
  Balls()
},[]);

  
  
  return (
    <div className="App"  style={{backgroundColor:'gainsboro', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>        
        <Display data={data} setData={setData} Balls={Balls} getJoke={getJoke}/>
    </div>
  );
}

export default App;
