import ProjectLink from './ProjectLink';
import { pf_dmg_calc, ticket_booking, rock_paper_scissors, 
    pic_32_light, discord_bot, invoicify, pet_adoption_site, arabic_letter_card_game } from '../shared/path';

import bot from '../images/discord_bot.png'
import pet_pursuit_home from '../images/pet_pursuit_home.png'
import pf_calc from '../images/pf_calc.png'
import nextcord_logo from '../images/nextcord_logo.svg'
import pet_pursuit_about from "../images/pet_pursuit_about.png"
import rock_paper_scissor from '../images/rock_paper_scissors.png'
import invoicify_dashboard from '../images/invoicify_dashboard.png'

import '../w3.css'

// an object type that holds the params for ProjectLink
class ProjectLinkParam {
    constructor(link, display_name, image, image_alt) {
        this.link = link
        this.display_name = display_name

        // default if no image provided
        if (image) {
            this.image = image
            this.image_alt = image_alt
        }

        // default if no image provided
        else {
            this.image = null
            this.image_alt = "No Image"
        }

        // the if statement assumes that image_alt is provided if image is provided
        
    }
}

// a react component to display each row
// hard coded to have 3 columns
const ProjectRow = ({projectLinkRowParams}) => {
    return (
        <div className="w3-row w3-padding-16">
            {projectLinkRowParams.map((projectLinkParam) => {
                return (
                    // row has 3 columns, so use w3-third
                    <div className="w3-third w3-container">
                    <ProjectLink link={projectLinkParam.link} 
                        display_name={projectLinkParam.display_name}
                        image={projectLinkParam.image}
                        image_alt={projectLinkParam.image_alt} />
                    </div>
                )
            })}
        </div>
    )
}

const AllProjects = () => {
    // hold an array of ProjectLinkParam, allows for dynamic making of grid

    const projectLinkParams = []
    projectLinkParams.push(
        new ProjectLinkParam(pf_dmg_calc, "Phantom Forces Ranges Calculator(Python)", pf_calc, "Damage Calculator Menu"),
        new ProjectLinkParam(ticket_booking, "Movie Ticket booking system (Java)"),
        new ProjectLinkParam(rock_paper_scissors, "Rock Paper Scissors (Python + tkinter)", rock_paper_scissor, "Game view"),
        new ProjectLinkParam(pic_32_light, "A PIC32 project for light  (C + Python)"),
        new ProjectLinkParam(discord_bot, "A discord bot (Python)", nextcord_logo, "Nextcord Logo"),
        new ProjectLinkParam(invoicify, "Invoicify (React + nodeJs)", invoicify_dashboard, "Invoicify Dashboard"),
        new ProjectLinkParam(pet_adoption_site, "Pet adoption Site (Next.Js)", pet_pursuit_about, "Pet Pursuit About"),
        new ProjectLinkParam(arabic_letter_card_game, "Arabic Letter Card Game")
    )
    
    // now we make another array of arrays, each sub array has 3 elements (at most)
    // so we have an array to use for our return/ProjectRow
    const num_col = 3   // if updating this, also update ProjectRow component implementation above
    const rowParams = []
    for (let i = 0; i < projectLinkParams.length; i += num_col) {
        const rowParam = projectLinkParams.slice(i, i+num_col)
        rowParams.push(rowParam)
    }


    return (
        <>
            {rowParams.map((rowParam) => {
                return <ProjectRow projectLinkRowParams={rowParam} />
            })}
        </>
    )
}

export default AllProjects