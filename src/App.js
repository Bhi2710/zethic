import './App.css';
import Navbar from './components/Navbar';
import TopMain from './components/TopMain';
import Icons from './components/Icons'
import Explore from './components/Explore';
import Amenities from './components/Amenities';
import Feature from './components/Feature';
import Highlight from './components/Highlight';
import Client from './components/Client';
import Footer from './components/Footer';
import Call from './components/Call';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopMain />
      <Icons />
      <Explore />
      <Amenities />
      <Feature />
      <Highlight />
      <Client />
      <Call />
      <Footer />
    </div>
  );
}

export default App;
