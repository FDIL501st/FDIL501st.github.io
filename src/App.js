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
                 display_name={"Phantom Forces Ranges Calculator(Python)"}
                 description={"A GUI app to help calculate hits to kills at ranges of guns or grenades in the Roblox  \
                    shooter Phantom Forces."}
            />

            <ProjectLink link={"https://github.com/FDIL501st/ENSF480-GR31-TermProject"}
                 display_name={"Movie Ticket booking system (Java)"}
                 description={"A course group project to make a Java app that allows to book tickets for a movie.  \
                    I worked on the backend, meaning the functions to access the MySQL database we had  \
                    running on our local machines."}
            />

            <ProjectLink link={"https://github.com/FDIL501st/ENCM511_gr6_Project-Codes/tree/main/AppProject2"}
                 display_name={"A PIC32 project for light  (C + Python)"}
                 description={"Programmed a PIC32 to configure the blinking speed of 3 small LED lights. \
                     The control is a simple Python GUI app which sends signals of \
                     lighting configuration selection to the PIC via a USB. \
                     I worked on the Python app and the initial C program of the PIC32. \
                     Circuit setup and debugging was done by my partner for this project."}
            />

        </div>
    );
}

export default App;
