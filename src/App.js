import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import Meals from './Meals';
import Weight from './Weight';
import Exercise from './Exercise';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/Meals' Component={Meals}/>
        <Route path='/Weight' Component={Weight}/>
        <Route path='/Exercise' Component={Exercise}/>
      </Routes>
    </Router>
  )
}

export default App