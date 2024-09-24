import GitHubLink from "../../components/GitHubLink"
import rock_paper_scissor from '../../images/rock_paper_scissors.png'

import "../../w3.css"


const RockPaperScissors = () => {
    return (
        <div className="w3-content">
            <p>
                A tkinter app that lets you play rock paper scissors against a CPU.
                This is a very simple app, as I was using this project to learn tkinter.
            </p>
            <GitHubLink link={"https://github.com/FDIL501st/RockPaperScissors"} />
            <img src={rock_paper_scissor} alt='The game interface' style={{maxWidth: "100%"}}/>
        </div>
    )
}

export default RockPaperScissors