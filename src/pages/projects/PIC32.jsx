import GitHubLink from "../../components/GitHubLink"

import "../../w3.css"


const PIC32 = () => {
    return (
        <div className="w3-content">
            <p>
                Programmed a PIC32 to configure the blinking speed of 3 small LED lights. 
                The control is a simple Python GUI app which sends signals of 
                lighting configuration selection to the PIC via a USB. 
                I worked on the Python app and the initial C program of the PIC32. 
                Circuit setup and debugging was done by my partner for this project.
            </p>
            <GitHubLink link={"https://github.com/FDIL501st/ENCM511_gr6_Project-Codes/tree/main/AppProject2"} />
        </div>
    )
}

export default PIC32
