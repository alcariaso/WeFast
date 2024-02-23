import Header from '../src/components/Header/Header'
import './App.css';
import HomeHub from './components/HomeHub/HomeHub';
import Community from '../src/components/Community/Community';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Community></Community>
      <HomeHub></HomeHub>
    </div>
  );
}

export default App;
