// import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import ProjectLink from './ProjectLink';

function App() {
  return (
      <div className="App">
        <NavBar/>

        <h1>Fadil's Portfolio</h1>
        <p>I'm hosted with GitHub Pages.</p>

        <h2>
          <a href="https://github.com/FDIL501st">My GitHub</a>
        </h2>
        <br/><br/>

        <h3>Projects worked on</h3>
        {/*// <!-- Links to projects I want to showcase -->*/}
        <ProjectLink link={"https://github.com/FDIL501st/Phantom-Forces-damage-ranges-calculator"} 
          display_name={"Phantom Forces Ranges Calculator(Python)"} />

        <ProjectLink link={"https://github.com/FDIL501st/ENSF480-GR31-TermProject"} 
          display_name={"Movie Ticket booking system (Java)"} />

        <ProjectLink link={"https://github.com/FDIL501st/ENCM511_gr6_Project-Codes"} 
          display_name={"Small PIC32 projects (C)"} />

      </div>
  );
}

export default App;
