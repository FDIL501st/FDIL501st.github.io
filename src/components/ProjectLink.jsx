import { useState } from 'react'
import '../w3.css'

const ProjectLink = ({children, link, display_name}) => {
    const [show, setShow] = useState(false)

    const link_display = "Link to Github repo"

    return (
        <div className="w3-card w3-padding w3-margin w3-round-xlarge w3-pale-green">
            
            {/* Acts like a dropdown, click on button to display content */}
            <button className="w3-hover-dark-gray w3-hover-shadow w3-button w3-border-bottom"
                    onClick={() => {setShow(prevValue => !prevValue)}}
                    style={{width: "100%"}}>

                <span>{display_name}</span>

                <span className='w3-right w3-border w3-gray' 
                style={{boxSizing: 'border-box', height: 25, width: 25}}>
                    {show ? '-' : '+'}
                </span>
                {/* The  above is a gray box of + or - to indiciate if currently drop down is active or not.
                This is to give a visual indication to user that this element can be clicked on to show more content. */}
            </button>
            
            {show && 
                <div>
                    <br/>
                    <a href={link} className="w3-text-cyan w3-hover-text-indigo" >{link_display}</a>
                    <br/>
                    {children}
                </div>}
        </div>
    )
}

export default ProjectLink

