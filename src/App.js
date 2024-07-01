//import logo from './logo.svg';
import './App.css';
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Snippets from "./components/Snippets";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="text-gray-400 body-font">
      <Navbar />
      <Intro />
      <Characters />
      <Snippets />
      <Contact />
    </div>
  );
}

export default App;
