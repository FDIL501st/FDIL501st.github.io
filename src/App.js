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
        <div className="App w3-pale-blue">
            <NavBar />

            <Routes>
                <Route path={home} element={<Home/>}/>
                <Route path={about} element={<About/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
            
            <Scroll />
            <Footer />
        </div>
    );
}

export default App;
