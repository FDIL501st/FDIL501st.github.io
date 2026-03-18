import GitHubLink from "../../components/GitHubLink";
import letter_match_home from "../../images/letter_match_home.png"
import letter_match_practice from "../../images/letter_match_practice.png"
import letter_match_easy from "../../images/letter_match_easy.png"
import letter_match_hard from "../../images/letter_match_hard.png"


const ArabicLetterCardGame = () => {
    return(
        <div className='w3-content' style={{flex: "1"}}>
            <p>
                A C# project using Avalonia to make a card matching game.
                What was being matched were Arabic letters/words.
            </p>
            <br />
            <p>
                This was a solo project in which the goal was to learn Avalonia and C#.
            </p>

            <GitHubLink link={"https://github.com/FDIL501st/Arabic-Letters-Matching-Game"} />

            <img src={letter_match_home} alt={"First view that shows upon starting game"} style={{maxWidth:"100%"}}/>
            <img src={letter_match_practice} alt={"Practice easy mode"} style={{maxWidth:"100%"}}/>
            <img src={letter_match_easy} alt={"Easy mode"} style={{maxWidth:"100%"}}/>
            <img src={letter_match_hard} alt={"Hard mode"} style={{maxWidth:"100%"}}/>
        </div>
    )
}

export default ArabicLetterCardGame