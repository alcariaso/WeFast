import Header from '../src/components/Header/Header'
import './App.css';
import HomeHub from './components/HomeHub/HomeHub';

import NutritionFood from './components/NutritionFood/NutritionFood';

function App() {
  return (
    <div className="App">
      
      <NutritionFood></NutritionFood>

      <HomeHub></HomeHub>
    </div>
  );
}

export default App;
