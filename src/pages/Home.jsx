import '../w3.css'
import AllProjects from "../components/AllProjects"

const Home = () => {
    return (
        <div className="w3-content">
            {/* <h2>
                <a href="https://github.com/FDIL501st">My GitHub</a>
            </h2>

            <br/>
            <br/> */}

            <h1><b>Projects worked on</b></h1>
            {/* Links to projects I want to showcase */}
            <AllProjects />

        </div>
    )
}

export default Home