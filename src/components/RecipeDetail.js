import React from "react";

function RecipeDetail({ ingredients }) {
  return ingredients.map((ing, i) => {
    return (
      <ul key={i} className="ingredient-list">
        <li className="ingredient-text">{ing.text}</li>
      </ul>
    );
  });
}

export default RecipeDetail;
