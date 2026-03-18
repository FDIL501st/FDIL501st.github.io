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
            </p>

            <p>
                This bot however is now part of the start of my homelab. I bought an old workstation pc, and installed debian in it to use as a server.
                This is where the bot runs now. As part of the start of my homelab, I also setup a tailscale network for the server and the computer
                I ssh into from. This is the restrict which computers can access my server.
                This also sets up adding more devices easier, like NAS or other machines I would access the server from.
            </p>
            <GitHubLink link={"https://github.com/FDIL501st/501st-bot"} />
            {/* <img src={bot} alt='Discord bot calculator command' style={{maxWidth: "100%"}}/> */}
        </div>

    )
}

export default DiscordBot