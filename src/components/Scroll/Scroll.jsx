import './Scroll.css';
import '../../w3.css'
import '../../catppuccin.css';

import { nav_id, footer_id } from '../../shared/id';

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
            {/* w3-button forces color of background and text to be inheriteed by parent element,
            thus overlay0 and subtext1 doesn't seem to have an effect */}
            <button className="Scroll overlay0 subtext1 w3-button w3-circle hover-surface2" 
            onClick={toTop}
            // rotate to make > point up
            style={{rotate: "-90deg", WebkitTransform: "-90deg"}}>
                &gt;
            </button>
            
            <button className="Scroll w3-button w3-circle surface0 subtext1 hover-surface2" 
            onClick={toBottom}
            // rotate to make > point down
            style={{rotate: "90deg", WebkitTransform: "90deg"}}>
                &gt;
            </button>
            
        </div>
    )
}

export default Scroll