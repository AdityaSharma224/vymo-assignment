import './App.css'
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Personality from './components/Personality/Personality';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Personality/>
    </div>
  );
}

export default App;
