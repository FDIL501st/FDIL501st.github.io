import GitHubLink from "../../components/GitHubLink"
import bot from '../../images/discord_bot.png'

import "../../w3.css"

const DiscordBot = () => {
    return (
        <div className="w3-content">
            <p>
                I created a discord bot using nextcord for one of the server I'm part of. 
                Most of the commands aren't anything special, copied from examples, 
                as the specific purpose of the bot no longer exists. 
                However, I recreated the bot as now attempting to add a calculator using discord buttons.
            </p>
            <GitHubLink link={"https://github.com/FDIL501st/501st-bot"} />
            <img src={bot} alt='Discord bot calculator command' style={{maxWidth: "100%"}}/>
        </div>

    )
}

export default DiscordBot