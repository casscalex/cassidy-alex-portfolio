import './App.css';
import Navigation from './screens/navigationBar/NavigationBar';
import Particles from 'react-tsparticles';
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <AboutMe />
      
    </div>
  );
}

export default App;
