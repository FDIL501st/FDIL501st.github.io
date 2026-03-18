import { Link } from "react-router-dom";
import '../w3.css'
import '../catppuccin.css'

const ProjectLink = ({link, display_name, image, image_alt}) => {

    return (
        <div className="surface1 w3-round-xlarge" style={{height: "200px"}}>
            <img src={image} alt={image_alt} 
                style={{display: "block", margin: "auto", maxHeight: "150px", maxWidth: "250px", paddingBottom: "16px", paddingTop: "16px"}}
                // block display with margins auto centers the image
                
                // change image size later
            />
            <Link to={link} className="text-blue hover-text" style={{display: "block"}}>
                {display_name}
            </Link>
        </div>
    )
}

export default ProjectLink

