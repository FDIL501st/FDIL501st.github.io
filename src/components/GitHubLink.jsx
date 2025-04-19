const { Link } = require("react-router-dom")

const GitHubLink = ({link}) => {
    return (
        <Link className="text-blue hover-text" to={link} style={{display: "block"}}>
            Go to GitHub repo
        </Link>
    )
}

export default GitHubLink