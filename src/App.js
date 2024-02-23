import Header from '../src/components/Header/Header'
import './App.css';
import HomeHub from './components/HomeHub/HomeHub';
import Nutrition from './components/Nutrition/Nutrition'

function App() {
  return (
    <div className="App">

      <Nutrition></Nutrition>
      <HomeHub></HomeHub>
    </div>
  );
}

export default App;
