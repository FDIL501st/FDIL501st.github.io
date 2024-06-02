import './App.css'

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/404"
import About from './pages/About';
import PFCalc from "./pages/projects/PFCalc"
import TicketBooking from "./pages/projects/TicketBooking"
import NavBar from "./components/NavBar";
import Scroll from "./components/Scroll/Scroll";
import Footer from "./components/Footer";
import { home, about, pf_dmg_calc, ticket_booking } from './shared/path';

function App() {
    return (
        // default of all pages is pale-blue
        <div className="App w3-pale-blue">
            <NavBar />

            {/* Define all possible routes in the app */}
            <Routes>
                <Route path={home} element={<Home/>} />
                <Route path={about} element={<About/>} />

                {/* Project routes */}
                <Route path={pf_dmg_calc} element={<PFCalc/>} />
                <Route path={ticket_booking} element={<TicketBooking/>}/>
                {/* Anything else throws a 404 */}
                <Route path="*" element={<Error404/>} />
            </Routes>
            
            <Scroll />
            <Footer />
        </div>
    );
}

export default App;
