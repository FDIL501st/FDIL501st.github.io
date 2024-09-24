import '../w3.css'
import AllProjects from "../components/AllProjects"

const Home = () => {
    return (
        <div className="w3-content">
            <h2>
                <a href="https://github.com/FDIL501st">My GitHub</a>
            </h2>

            <br/>
            <br/>

            <h2>Projects worked on</h2>
            {/* Links to projects I want to showcase */}
            <AllProjects />

        </div>
    )
}

export default Home