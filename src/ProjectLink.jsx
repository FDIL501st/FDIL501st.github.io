import "./w3.css"

const ProjectLink = ({link, display_name, description}) => {
    return (
        <div className="w3-card w3-padding w3-margin w3-round-xlarge">
            <a href={link} className="w3-hover-text-indigo">{display_name}</a>
            <p>{description}</p>
        </div>
    )
}

export default ProjectLink