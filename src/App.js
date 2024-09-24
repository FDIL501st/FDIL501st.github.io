import './App.css'

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/404"
import About from './pages/About';
import PFCalc from "./pages/projects/PFCalc"
import TicketBooking from "./pages/projects/TicketBooking"
import RockPaperScissors from "./pages/projects/RockPaperScissors"
import DiscordBot from "./pages/projects/DiscordBot"
import PIC32 from "./pages/projects/PIC32"
import Invoicify from "./pages/projects/Invoicify"
import PetAdoption from "./pages/projects/PetAdoption"
import ArabicLetterCardGame from "./pages/projects/ArabicLetterCardGame"
import NavBar from "./components/NavBar";
import Scroll from "./components/Scroll/Scroll";
import Footer from "./components/Footer";
import { home, about, pf_dmg_calc, ticket_booking, rock_paper_scissors, 
    pic_32_light, discord_bot, invoicify, pet_adoption_site, 
    arabic_letter_card_game} from './shared/path';

function App() {
    return (
        // default of all pages is pale-blue
        <div className="App w3-pale-blue" style={{display: "flex", flexDirection: 'column', minHeight: "100vh"}}>
  
            <NavBar />
 

            {/* Define all possible routes in the app */}
            <Routes>
                {/* Navbar routes */}
                <Route path={home} element={<Home/>} />
                <Route path={about} element={<About/>} />

                {/* Project routes */}
                <Route path={pf_dmg_calc} element={<PFCalc/>} />
                <Route path={ticket_booking} element={<TicketBooking/>} />
                <Route path={rock_paper_scissors} element={<RockPaperScissors/>} />
                <Route path={discord_bot} element={<DiscordBot/>} />
                <Route path={pic_32_light} element={<PIC32/>} />
                <Route path={invoicify} element={<Invoicify/>} />
                <Route path={pet_adoption_site} element={<PetAdoption/>} />
                <Route path={arabic_letter_card_game} element={<ArabicLetterCardGame/>} />

                {/* Anything else throws a 404 error*/}
                <Route path="*" element={<Error404/>} />
            </Routes>
            
            <Scroll />
            <Footer />
        </div>
    );
}

export default App;
