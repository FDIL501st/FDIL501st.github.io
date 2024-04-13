import '../w3.css'
import AllProjects from "../components/AllProjects"

const Home = () => {
    return (
        <>
            <h1>Fadil's Portfolio</h1>

            <h2>
                <a href="https://github.com/FDIL501st">My GitHub</a>
            </h2>
            <br/><br/>
            
            <div className="w3-row w3-pale-blue">
                <div className="w3-col m1 w3-container"/>

                <div className="w3-col m10">
                    <h2>Projects worked on</h2>
                    {/* Links to projects I want to showcase */}
                    <AllProjects />
                </div>
                <div className="w3-col m1 w3-container"/>
            </div>
        </>
    )
}

export default Home