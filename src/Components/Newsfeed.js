import MacrosChart from '../Components/MacrosChart';
import CaloriesChart from '../Components/CaloriesChart';
import WeightChart from '../Components/WeightChart';

const Newsfeed = () => {
    const goal = 2500;
    const consumed = 2200;
    const left = goal - consumed;
  
    const labels = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday', ];
    const data = [180, 180, 182, 182, 181, 183, 182];
    
    const protein = 200;
    const carbs = 190;
    const fats = 70;

    return (
      <div className="Newsfeed">
        <h2>Possibilites of MyFitFriend</h2>
        <div className="Newsfeed-Container">
          <div className="Calorie-widget">
            <h2>Calories</h2>
            <div className="Calories-chart">
              <CaloriesChart consumed={consumed} left={left}/>
              <p>Using the Meals tab, log your food intake and track your calories for the day against a goal!</p>
            </div>
          </div>
          <div className="Weight-widget">
            <h2>Weight</h2>
            <div className="Macros-chart">
              <WeightChart labels={labels} data={data} />
              <p>Visualize bodyweight data, via the Weight tab!</p>
            </div>
          </div>
          <div className="Macros-widget">
            <h2>Macros</h2>
            <div className="Macros-chart">
              <MacrosChart protein={protein} carbs={carbs} fats={fats}/>
              <p>After you've logged your meals, view macronutrient data for the day!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Newsfeed;