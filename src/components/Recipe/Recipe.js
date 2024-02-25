import React from 'react';
import RecipeCards from './RecipeCards';

const recipes = [
  {
    id: 1,
    name: 'Spaghetti Bolognese',
    image: 'https://example.com/spaghetti-bolognese.jpg',
    description: 'A classic Italian dish made with spaghetti and a rich tomato and meat sauce.'
  },
  {
    id: 2,
    name: 'Chicken Curry',
    image: 'https://example.com/chicken-curry.jpg',
    description: 'A spicy and flavorful Indian dish made with chicken, onions, tomatoes, and a blend of spices.'
  },
  {
    id: 3,
    name: 'Vegetable Stir Fry',
    image: 'https://example.com/vegetable-stir-fry.jpg',
    description: 'A quick and healthy dish made with a variety of vegetables and soy sauce.'
  },
  {
    id: 4,
    name: 'Beef Tacos',
    image: 'https://example.com/beef-tacos.jpg',
    description: 'A delicious Mexican dish made with seasoned beef, tortillas, and your favorite toppings.'
  }
];

const App = () => (
  <div className="app">
    <h1>Food Recipe Choices</h1>
    <RecipeCards recipes={recipes} />
  </div>
);

export default App;