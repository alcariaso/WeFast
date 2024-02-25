import React from 'react';
import '../RecipeCards/RecipeCard.scss';

const RecipeCards = ({ recipes }) => {
  // Validate recipes prop
  if (!Array.isArray(recipes)) {
    console.error('The recipes prop is not an array:', recipes);
    return <div>An error occurred. Please try again.</div>;
  }

  return (
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
};

export default RecipeCards;