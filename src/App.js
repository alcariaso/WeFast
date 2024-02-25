import Header from '../src/components/Header/Header'
import './App.css';
import HomeHub from './components/HomeHub/HomeHub';

import NutritionFood from './components/NutritionFood/NutritionFood';
import RecipeCards from './components/RecipeCards/RecipeCard';

function App() {
  return (
    <div className="App">
      
      <NutritionFood></NutritionFood>
      <RecipeCards></RecipeCards>
  
    </div>
  );
}

export default App;
