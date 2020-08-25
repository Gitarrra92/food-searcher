import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

import Recipe from "./components/Recipe";
import Warning from "./components/Warning";

function App() {
  const [query, seQuery] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [isWarning, setIsWarning] = useState(false);
  const [isFoodFound, setIsFoodFound] = useState(true);

  const APP_ID = "XXX";
  const APP_KEY = "XXX";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const handleInput = (e) => {
    seQuery(e.target.value);
  };

  const getData = async () => {
    if (query !== "") {
      const result = await Axios(url);
      if (result.data.more) {
        setRecipe(result.data.hits);
        seQuery("");
      } else {
        setIsFoodFound(!isFoodFound);
      }
    } else {
      setIsWarning(!isWarning);
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <div className="App">
      <h1>Find your Recipe</h1>

      <form onSubmit={onSubmitForm} className="search-form">
        {isWarning ? <Warning warning="Please fill the form" /> : null}

        <input
          type="text"
          value={query}
          name={query}
          placeholder="find your recipe"
          onChange={handleInput}
        ></input>
        <button type="submit">Search</button>
        {isFoodFound === false ? (
          <Warning warning="no such food found" />
        ) : null}
      </form>
      <div className="recipes">
        {recipe.map((singleRecepy, i) => {
          return <Recipe key={i} recipe={singleRecepy.recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
