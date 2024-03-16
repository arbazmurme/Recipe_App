import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
const RecipeCard = () => {
  const location = useLocation();
  const currentUrl = location.search.split("=").pop();
  const [recipe, setRecipes] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${currentUrl}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); 
  }, [currentUrl])
  return (
    <>
    <div className="card m-auto mt-5" style={{ maxWidth: "90%" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={recipe.image} className="card-img-top" alt={recipe.name} />
        </div>
        <div className="col-md-8">
          <div className="mx-5 card-body">
            <h5 className="card-title display-6 ">{recipe.name}</h5>
            <p className="card-text">
              <h5 className="mb-2 text-muted">{recipe.cuisine}</h5>
              <p>
                <strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes
              </p>
              <p>
                <strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes
              </p>
              <p>
                <strong>Servings:</strong> {recipe.servings}
              </p>
              <p>
                <strong>Difficulty:</strong> {recipe.difficulty}
              </p>
              <p>
                <strong>Calories Per Serving:</strong>{" "}
                {recipe.caloriesPerServing}
              </p>
              <p>
                <strong>Meal Type:</strong>{" "}
                {recipe.mealType ? recipe.mealType.join(", ") : "Not specified"}
              </p>
            </p>
            <p className="card-text text-end">
              <small className="text-muted ">Rating : {recipe.rating} (based on{" "}
                {recipe.reviewCount} reviews)</small>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="card m-auto mt-0" style={{ maxWidth: "90%" }}>
      <div className="row g-0">
        <div className="col-md-6">
        <div className="m-4">
        <h5 className="display-6 text-center">Ingredients :</h5>
          <ul class="list-group list-group-flush mx-5 list-group-numbered"  style={{ maxWidth: "90%" }}>
            {recipe.ingredients && recipe.ingredients.map((ingredient, index) =><li key={index} class="list-group-item">{ingredient}</li>)}
          </ul>
        </div>
        </div>
        <div className="col-md-6">
        <div className="m-4">
        <h5 className="display-6 text-center">Instructions :</h5>
          <ul class="list-group list-group-flush mx-5 list-group-numbered"  style={{ maxWidth: "90%" }}>
            {recipe.instructions && recipe.instructions.map((instruction, index) =><li key={index} class="list-group-item">{instruction}</li>)} 
          </ul>
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default RecipeCard;

{
  /* <div className="col-md-6">
<div class="card">
<div class="card-body">
<h5 class="card-title">{recipe.name}</h5>
<h5 className="mb-2 text-muted">{recipe.cuisine}</h5>
<div className="mb-3">
  <strong>ingredients:</strong>
  <ul>
    {recipe.ingredients && recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
  </ul>
</div>
<div className="mb-3">
  <strong>instructions:</strong>
  <ul>
    {recipe.instructions && recipe.instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}
  </ul>
</div>
<p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p>
<p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
<p><strong>Servings:</strong> {recipe.servings}</p>
<p><strong>Difficulty:</strong> {recipe.difficulty}</p>
<p><strong>Calories Per Serving:</strong> {recipe.caloriesPerServing}</p>
<p><strong>Rating:</strong> {recipe.rating} (based on {recipe.reviewCount} reviews)</p>
<p><strong>Meal Type:</strong> {recipe.mealType ? recipe.mealType.join(', ') : 'Not specified'}</p>
</div>
</div>
</div> */
}
