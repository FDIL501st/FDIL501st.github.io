import './Scroll.css';
import '../../w3.css'
import { nav_id, footer_id } from '../shared/constants';

// scroll functions assume that navbar and footer exists on the page 
// which it doest for all pages as that is how template is set up

const toTop = () => {
    const top = document.getElementById(nav_id)
    top.scrollIntoView({behavior: "smooth"})
}

const toBottom = () => {
    const bottom = document.getElementById(footer_id)
    bottom.scrollIntoView({behavior: "smooth"})
}

const Scroll = () => {

    return (
        <div className="Scroll">
            <button className="w3-button w3-circle Scroll" onClick={toTop}>
                &uarr;
            </button>

            <button className="w3-button w3-circle Scroll" onClick={toBottom}>
                &darr;
            </button>
        </div>
    )
}

export default Scroll