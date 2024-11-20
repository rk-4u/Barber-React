import './App.css';
import TerrainBackground from './Components/TerrainBackground';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Card from './Components/Card';
import SocialMediaFooter from './Components/SocialMediaFooter';

function App() {
  return (
    <div className="App">
      <TerrainBackground />
      <Navbar style={{zIndex: 2}}/>
      <Home/>
      <Card/>
      <div className='my-tailwind-scope'>
      <SocialMediaFooter/>
      </div>
    </div>
  );
}

export default App;
