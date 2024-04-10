import './App.css';
import NavBar from "./components/NavBar";
import AllProjects from './components/AllProjects';
import Scroll from './components/Scroll/Scroll';
import Footer from './components/Footer';

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
            <Footer />
            <Scroll />
        </div>
    );
}

export default App;
