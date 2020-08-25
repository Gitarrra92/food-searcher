import React, { useState } from "react";

import RecipeDetail from "./RecipeDetail";

const Recipe = ({ recipe }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { label, image, url, ingredients } = recipe;

  function handleOpenIngredients() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label}></img>
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <button onClick={handleOpenIngredients}>Ingredients</button>
      {isOpen ? <RecipeDetail ingredients={ingredients} /> : null}
    </div>
  );
};

export default Recipe;
