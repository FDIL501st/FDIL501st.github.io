const { Link } = require("react-router-dom")

const GitHubLink = ({link}) => {
    return (
        <Link to={link} style={{display: "block"}}>
            Go to GitHub repo
        </Link>
    )
}

export default GitHubLink