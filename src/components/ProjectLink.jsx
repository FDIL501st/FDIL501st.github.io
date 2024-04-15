import { useState } from 'react'
import '../w3.css'

const ProjectLink = ({children, link, display_name}) => {
    const [show, setShow] = useState(false)


    return (
        <div className="w3-card w3-padding w3-margin w3-round-xlarge w3-pale-green">
            
            {/* Acts like a dropdown, click on button to display content
             button text is a link to the project */}
            <button className="w3-hover-pale-green w3-hover-shadow w3-button w3-border-bottom"
                    onClick={() => {setShow(prevValue => !prevValue)}}
                    style={{width: "100%"}}>

                <a href={link} className="w3-hover-text-indigo">{display_name}</a>
            </button>
            
            {show && children}
        </div>
    )
}

export default ProjectLink