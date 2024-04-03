import './App.css';
import NavBar from "./NavBar";
import AllProjects from './AllProjects';

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
            
            <div className="w3-row">
                <div className="w3-col m1 w3-container"/>

                <div className="w3-col m10">
                    <h2>Projects worked on</h2>
                    {/* Links to projects I want to showcase */}
                    <AllProjects />
                </div>
                <div className="w3-col m1 w3-container"/>
            </div>

            
            
        </div>
    );
}

export default App;
