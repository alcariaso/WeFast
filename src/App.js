import Header from '../src/components/Header/Header'
import './App.css';
import HomeHub from './components/HomeHub/HomeHub';
import Recipes from './components/Recipe/Recipe';
import NutritionFood from './components/NutritionFood/NutritionFood';
import RecipeCards from './components/RecipeCards/RecipeCard';

function App() {
  return (
    <div className="App">
      
      <NutritionFood></NutritionFood>
      <h1>Food Recipe Choices</h1>
  <Recipes></Recipes>
  
    </div>
  );
}

export default App;
