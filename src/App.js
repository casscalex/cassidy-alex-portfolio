import './App.css';
import Navigation from './screens/navigationBar/NavigationBar';
import Particles from 'react-tsparticles';
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <AboutMe />
      <Technologies />

    </div>
  );
}

export default App;
