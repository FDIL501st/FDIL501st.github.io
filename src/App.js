import './App.css'

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/404"
import NavBar from "./components/NavBar";
import Scroll from "./components/Scroll/Scroll";
import Footer from "./components/Footer";
import About from './pages/About';
import { home, about } from './shared/path';

function App() {
    return (
        <div className="App">
            <NavBar />

            <Routes>
                <Route path={home} element={<Home/>}/>
                <Route path={about} element={<About/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
            
            <Footer />
            <Scroll />
            {/* Scroll must come last so it stays on top of everything else 
            important to keep being to interact no mater 
            what elements are also taking bottom right of page*/}
        </div>
    );
}

export default App;
