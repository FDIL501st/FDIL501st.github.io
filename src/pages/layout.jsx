import "../App.css"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer";
import Scroll from "../components/Scroll/Scroll"

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
        <NavBar/>

        <Outlet />

        <Footer />
        <Scroll />
    </div>
  )
};

export default Layout;