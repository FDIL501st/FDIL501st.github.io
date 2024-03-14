// import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";

function App() {
  return (
      <div className="App">
        <NavBar/>

        <h1>Fadil's Portfolio</h1>
        <p>I'm hosted with GitHub Pages.</p>

        <h3>
          <a href="https://github.com/FDIL501st">My GitHub</a>
        </h3>
        <br/><br/>

        <h3>Projects worked on</h3>
        {/*// <!-- Links to projects I want to showcase -->*/}
        <a href="https://github.com/FDIL501st/Phantom-Forces-damage-ranges-calculator">Phantom Forces Ranges Calculator
          (Python)</a>
        <br/><br/>

        <a href="https://github.com/FDIL501st/ENSF480-GR31-TermProject">Movie Ticket booking system (Java)</a>
        <br/><br/>

        <a href="https://github.com/FDIL501st/ENCM511_gr6_Project-Codes">Small PIC32 projects</a>
      </div>
  );
}

export default App;
