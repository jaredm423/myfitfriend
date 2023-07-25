import { useState } from 'react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import Navigation from './Components/Navigation'
import WeightChart from './Components/WeightChart'

function Weight () {
  const weekLabels = {
    type: 'time',
    time: {
      unit: 'day'
    }
  }
  const monthLabels = {
    type: 'time',
    time: {
      unit: 'month'
    }
  }
  const yearLabels = {
    type: 'time',
    time: {
      unit: 'year'
    }
  }
  const week = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday', ];
  const [labels, setLabels] = useState(week);
  const [data, setData] = useState([]);
  const [weight, setWeight] = useState();

  function addWeightData() {
    setData(oldList => [...oldList, weight]);
  }

    return (
      <div className="App">
        <Navigation/>
        <h3>See your weekly weight trend!</h3>
        <div className='Weight-Content-Container'>
          <div className='Weight-widget-Main'>
            <WeightChart labels={labels} data={data}/>
          </div>
          <div className='Weight-submit-form'>
          <form>
            <input placeholder='enter weight' value={weight} onChange={(e) => {setWeight(e.target.value)}}></input>
            <button type='button' onClick={() => addWeightData()}>Log this weight</button>
          </form>
          </div>
        </div>
      </div>
    );
  }
export default Weight;