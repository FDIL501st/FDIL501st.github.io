const ProjectLink = ({link, display_name}) => {
    return (
        <div>
            <a href={link}>{display_name}</a>
        </div>
    )
}

export default ProjectLink