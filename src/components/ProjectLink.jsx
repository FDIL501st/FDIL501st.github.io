import { useState } from 'react'
import '../w3.css'

const ProjectLink = ({link, display_name, description}) => {
    const [show, setShow] = useState(false)


    return (
        <div className="w3-card w3-padding w3-margin w3-round-xlarge w3-hover-light-grey"
                onClick={() => {setShow(prevValue => !prevValue)}}
        >
            <a href={link} className="w3-hover-text-indigo">{display_name}</a>

            {show && <p>{description}</p>}
            
        </div>
    )
}

export default ProjectLink