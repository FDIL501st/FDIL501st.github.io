import { Link } from "react-router-dom";
import pf_calc from '../../images/pf_calc.png'
import pf_calc_result from '../../images/pf_calc_result.png'

const PFCalc = () => {
    return (
        <div className="w3-content">
            <p>
                A GUI app to help calculate hits to kills at ranges of guns or grenades in the Roblox  
                shooter Phantom Forces. Used tkinter to make the GUI.
            </p>
            <Link to="https://github.com/FDIL501st/Phantom-Forces-damage-ranges-calculator" style={{display: "block"}}>
                Link to Github repo
            </Link>
            <img src={pf_calc} alt="Calculator menu" style={{width: "50%"}}/>
            <img src={pf_calc_result} alt="Calculator result" style={{width: "50%"}}/>
        </div>
    )
}

export default PFCalc
