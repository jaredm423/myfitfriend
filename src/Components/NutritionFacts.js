import "../NutritionFacts.css"
import React, { useEffect, useState } from 'react';


const NutritionFacts = ({ calories, fats, carbs, protein }) => {
    return (
        <div className="Nutrition-Facts-Label">
            <div className="Nutrition-Facts-Head">
                <bold>Nutrition Facts</bold>
            </div>
            <div className="Nutrition-Facts-Servings">
                <bold>Serving size <span className="tab"></span> 100g </bold>
            </div>
            <div className="Nutrition-Facts-Amount-Per">
                Amount per serving
            </div>
            <div className="Nutrition-Facts-Calories">
                Calories <span className="tab1"></span> {calories}
            </div>
            <div className="Nutrition-Facts-Macros">
                <p>Total Fat <span className="tab2"></span> {fats}g </p> <br/>
                <p>Total Carbohydrate <span className="tab3"></span> {carbs}g </p> <br/>
                <p>Protein <span className="tab4"></span> {protein}g </p>
            </div>
        </div>
    );
}

export default NutritionFacts;