import Navigation from './Components/Navigation';
import FoodSearch from "./Components/FoodSearch";

import { useState } from 'react';

function Meals () {
    return (
      <div className="App">
        <Navigation/>
        <FoodSearch/>
      </div>
    );
  }
export default Meals;