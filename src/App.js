import Header from '../src/components/Header/Header'
import './App.css';
import HomeHub from './components/HomeHub/HomeHub';
import ImageSlider from './components/ImageSlider/ImageSlider';
import NutritionFood from './components/NutritionFood/NutritionFood';

function App() {
  return (
    <div className="App">
      
      <NutritionFood></NutritionFood>
      <ImageSlider></ImageSlider>
      <HomeHub></HomeHub>
    </div>
  );
}

export default App;
