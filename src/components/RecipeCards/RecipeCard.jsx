import React from 'react';
import '../RecipeCards/RecipeCards.scss';


const RecipeCards = ({ recipes }) => (
  <div className="recipe-cards">
    {recipes.map((recipe) => (
      <div key={recipe.id} className="recipe-card">
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} />
        <p>{recipe.description}</p>
      </div>
    ))}
  </div>
);

export default RecipeCards;