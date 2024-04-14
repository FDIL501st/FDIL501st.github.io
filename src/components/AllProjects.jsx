import ProjectLink from './ProjectLink';
import bot from '../images/discord_bot.png'
import pet_pursuit_home from '../images/pet_pursuit_home.png'
import pf_calc from '../images/pf_calc.png'
import pf_calc_result from '../images/pf_calc_result.png'
import '../w3.css'

const AllProjects = () => {
    return (
        <>
            <ProjectLink link={"https://github.com/FDIL501st/Phantom-Forces-damage-ranges-calculator"}
                display_name={"Phantom Forces Ranges Calculator(Python)"}
            >
                <p>
                    A GUI app to help calculate hits to kills at ranges of guns or grenades in the Roblox  
                    shooter Phantom Forces. Used tkinter to make the GUI.
                </p>
                <img src={pf_calc} alt="Calculator menu" style={{width: "60%"}}/>
                <img src={pf_calc_result} alt="Calculator result" style={{width: "60%"}}/>
            </ProjectLink>

            <ProjectLink link={"https://github.com/FDIL501st/ENSF480-GR31-TermProject"}
                display_name={"Movie Ticket booking system (Java)"}
            >
                <p>A course group project to make a Java app that allows to book tickets for a movie.  
                    I worked on the backend, meaning the functions to access the MySQL database we had  
                    running on our local machines.</p>
            </ProjectLink>

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

            <ProjectLink link={"https://github.com/FDIL501st/pet-adoption-401"}
                display_name={"Pet adoption Site (Next.Js)"}
            >
                <p>
                    In a course group project, we made a site that 
                    can be used to browse pets and book an appointment to view them. 
                    We used fake pet data for showcasing the site. 
                    I worked on the backend. This included creating the MySQL database from the requirements we 
                    decided, and the functions for most pages that interacts with the database. 
                    The MySQL database exists on google cloud using credits, 
                    so the site will not be working as I ran out of credits to keep the database isntance running.
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
        </>
    )
}

export default AllProjects