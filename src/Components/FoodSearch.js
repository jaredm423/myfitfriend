import React, { useEffect, useState } from 'react';
import CaloriesChart from './CaloriesChart';
import MacrosChart from './MacrosChart';
import NutritionFacts from './NutritionFacts';
import MealList from './MealList';

const FoodSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const params = {
        api_key: 'evqbNevNU07uaE9caCJE02MCkRf9X0rd388kYihc',
        query: searchTerm,
        dataType: ["Survery (FNDDS)"],
        pageSize: 5,
        pageNumber: 1
    };
    const api_url = 
      `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(params.query)}&dataType=Survey%20%28FNDDS%29&pageSize=${encodeURIComponent(params.pageSize)}&pageNumber=${encodeURIComponent(params.pageNumber)}&api_key=${encodeURIComponent(params.api_key)}`;
    
    const [backendData, setBackendData] = useState([{}]);
    const handleSubmit = (event) => {
      event.preventDefault();

      fetch(api_url).then(
        response => response.json()
      ).then(
        data => {
          setBackendData(data);
        }
      );
    };
    const [protein, setProtein] = useState(0);
    const [fats, setFats] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [calories, setCalories] = useState(0);
    const [name, setName] = useState('');

    const FoodClickHandler = (event, key) => {
      setProtein(JSON.stringify(backendData.foods[key].foodNutrients[0].value));
      setFats(JSON.stringify(backendData.foods[key].foodNutrients[1].value));
      setCarbs(JSON.stringify(backendData.foods[key].foodNutrients[2].value));
      setCalories(JSON.stringify(backendData.foods[key].foodNutrients[3].value));
      setName(backendData.foods[key].description);

    };

    const [listOfFoodObjects, setListOfFoodObjects] = useState([]);
    
    const [totalProtein, setTotalProtein] = useState(0);
    const [totalCarbs, setTotalCarbs] = useState(0);
    const [totalFats, setTotalFats] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);


    function addFoodItem(){

      const foodItem = {
        id: Math.random(),
        protein: protein,
        fats: fats,
        carbs: carbs,
        calories: calories,
        name: name
      };
      setListOfFoodObjects(oldList => [...oldList, foodItem]);

      setTotalProtein(totalProtein => parseInt(totalProtein) + parseInt(foodItem.protein));
      setTotalCarbs(totalCarbs => parseInt(totalCarbs) + parseInt(foodItem.carbs));
      setTotalFats(totalFats => parseInt(totalFats) + parseInt(foodItem.fats));
      setTotalCalories(totalCalories => parseInt(totalCalories) + parseInt(foodItem.calories));
    }

    const [goal, setGoal] = useState();
    
    return (
        <div> 
            <div className='Food-Search-Container'>
              <div className='Food-Search-Form'>
                <h3>Define today's calorie goal</h3>
                <form className='goal-form'>
                  <input placeholder='calorie goal' value={goal} onChange={(e) => setGoal(e.target.value)}></input>
                </form>
                <h3>Search for a food</h3>
                <form onSubmit={handleSubmit}>
                  <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} 
                  placeholder='enter food name'>
                  </input>
                  <button type='submit'>search</button>
                </form>
                
              </div>
              <div className='Food-Search-Results'>
              <h3>Search Results:</h3>
                {(typeof backendData.foods === 'undefined') ? ( <p>Waiting...</p>): 
                (backendData.foods.map((foods, key) => (
                  <p onClick={event => FoodClickHandler(event, key)} className='Food-Search-Items'key={key}>{foods.description}</p>
                  ))
                )}
              </div>
            </div>
            <div className='Nutrition-Facts-Meal-List-Container'>
              <div className='Nutrition-Facts-Div'>
                <NutritionFacts calories={calories} fats={fats} carbs={carbs} protein={protein}/>
                <button type="button" onClick={() => addFoodItem()} >Log this food</button>
              </div>
              <div className='Meal-List'>
              <MealList listOfFoodObjects={listOfFoodObjects}/>
              </div>
            </div>
            <div className='Newsfeed-Container-2'>
              <div className='Calories-chart-2'>
                <h3>Total Calories</h3>
                <div className='Calories-chart'>
                  <CaloriesChart left={goal - totalCalories} consumed={totalCalories}/>
                </div>
              </div>
              <div className='Macros-chart-2'>
              <h3>Total Macros</h3>
                <div className='Macros-chart'>
                  <MacrosChart protein={totalProtein} carbs={totalCarbs} fats={totalFats}/>
                </div>
              </div>
            </div>
        </div>
    )
};
export default FoodSearch