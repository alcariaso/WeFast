import React from 'react';
import RecipeCards from '../RecipeCards/RecipeCard';
import image1 from '../../assets/foodImages/food-item-6.jpg'
import image2 from '../../assets/foodImages/food-item-7.jpg'
import image3 from '../../assets/foodImages/food-item-8.jpg'
import image4 from '../../assets/foodImages/food-item-9.jpg'
import image5 from '../../assets/foodImages/food-item-10.jpg'

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      name: 'Breakfast Burritos',
      image: image1,
      description: 'These irresistible breakfast burritos.'
    },
    {
      id: 2,
      name: 'Avocado Toast',
      image: image2,
      description: 'Lightly toast slices of bread with smashed avocado and Fried Egg.'
    },
    {
      id: 3,
      name: 'Vegetable Stir Fry',
      image: image3,
      description: 'A quick and healthy dish made with a variety of vegetables and soy sauce.'
    },
    {
      id: 4,
      name: 'Beery-Almond Smoothie',
      image: image4,
      description: 'A little frozen banana gives a creamy texture'
    },
    {
        id: 5,
        name: 'Chocolate Banana Oatmeal',
        image: image5,
        description: 'Kid-friendly healthy chocolate and banana oatmeal.'
      }


  ];

  return <RecipeCards recipes={recipes} />;
};

export default Recipes;