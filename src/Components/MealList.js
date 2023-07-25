const MealList = ({listOfFoodObjects}) => {
    return (
      <div>
        <ul>
          <h3>Foods Logged</h3>
          { listOfFoodObjects.map((food) => {
                return (
                  <ul className="Food-Log-List">
                    <li key={food.id}> {food.name} - {food.calories}cals - {food.protein}p</li>
                  </ul>
                );
              })}
        </ul>
      </div>
    );
  }

  export default MealList;