import ProjectLink from './ProjectLink';
import { pf_dmg_calc, ticket_booking, rock_paper_scissors, 
    pic_32_light, discord_bot, invoicify, pet_adoption_site } from '../shared/path';

import bot from '../images/discord_bot.png'
import pet_pursuit_home from '../images/pet_pursuit_home.png'
import pf_calc from '../images/pf_calc.png'
import nextcord_logo from '../images/nextcord_logo.svg'
import pet_pursuit_about from "../images/pet_pursuit_about.png"
import rock_paper_scissor from '../images/rock_paper_scissors.png'
import invoicify_dashboard from '../images/invoicify_dashboard.png'
import invoicify_create from '../images/invoicify_create_invoice_60_zoom.png'
import invoicify_view from '../images/invoicify_view_invoice_70_zoom.png'

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
        new ProjectLinkParam(invoicify, "Invoicify (React + nodeJs)"),
        new ProjectLinkParam(pet_adoption_site, "Pet adoption Site (Next.Js)", pet_pursuit_about, "Pet Pursuit About")
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

            {/* <br/>

            <div>
                <ProjectLink link={"https://github.com/FDIL501st/ENCM511_gr6_Project-Codes/tree/main/AppProject2"}
                    display_name={"A PIC32 project for light  (C + Python)"}
                >
                    <p>Programmed a PIC32 to configure the blinking speed of 3 small LED lights. 
                            The control is a simple Python GUI app which sends signals of 
                            lighting configuration selection to the PIC via a USB. 
                            I worked on the Python app and the initial C program of the PIC32. 
                            Circuit setup and debugging was done by my partner for this project.
                    </p>
                </ProjectLink>

                <ProjectLink link={"https://github.com/FDIL501st/cpsc471finalproject"}
                    display_name={"Invoicify (React)"}
                >
                    <p>
                        A course group project in which we made an online tool for businesses to create invoices
                        for their clients. The vision was to allow for clients to view and pay invoices without needing
                        to create their an account with the app.
                    </p>

                    <p>
                        I mainly worked on the forms in this project. The checking of fields inputted and 
                        the POST function that gets called upon entering the form. 
                    </p>
                    <img src={invoicify_create} alt="Create invoice page" style={{width:"100%"}}/>
                    <img src={invoicify_view} alt="View invoice page" style={{width:"100%"}}/>
                    <img src={invoicify_dashboard} alt="Dashboard page" style={{width:"100%"}}/>
                </ProjectLink>

                <ProjectLink link={"https://github.com/FDIL501st/pet-adoption-401"}
                    display_name={"Pet adoption Site (Next.Js)"}
                >
                    <p>
                        In a course group project, we made a site that 
                        can be used to browse pets and book an appointment to view them. 
                        We used fake pet data for showcasing the site. 
                    </p>
                    <p>
                        I worked on the backend. This included creating the MySQL database from the requirements we 
                        decided, and the functions for most pages that interacts with the database. 
                        The MySQL database exists on google cloud using credits, 
                        so the site will not be working as I ran out of credits to keep the database instance running.
                    </p>
                    <img src={pet_pursuit_home} alt="Pet Pursuit Home Page" style={{width:"100%"}}/>
                </ProjectLink>

                <ProjectLink link={"https://github.com/FDIL501st/501st-bot"}
                    display_name={"A discord bot (Python)"}
                >
                    <p>
                        I created a discord bot using nextcord for one of the server I'm part of. 
                        Most of the commands aren't anything special, copied from examples, 
                        as the specific purpose of the bot no longer exists. 
                        However, I recreated the bot as now attempting to add a calculator using discord buttons.
                    </p>
                    <img src={bot} alt='Discord bot calculator command' style={{width: "50%"}}/>
                </ProjectLink>

                <ProjectLink link={"https://github.com/FDIL501st/RockPaperScissor"}
                    display_name={"Rock Paper Scissor (Python)"}
                >
                    <p>
                        A tkinter app that lets you play rock paper scissors against a CPU.
                        This is a very simple app, as I was using this project to learn tkinter.
                    </p>
                    <img src={rock_paper_scissor} alt='The game interface' style={{width: "60%"}}/>
                </ProjectLink>
            </div> */}

        </>
    )
}

export default AllProjects