import ProjectLink from './ProjectLink';

const AllProjects = () => {
    return (
        <>
            <ProjectLink link={"https://github.com/FDIL501st/Phantom-Forces-damage-ranges-calculator"}
                display_name={"Phantom Forces Ranges Calculator(Python)"}
                description={"A GUI app to help calculate hits to kills at ranges of guns or grenades in the Roblox  \
                    shooter Phantom Forces."}
            />

            <ProjectLink link={"https://github.com/FDIL501st/ENSF480-GR31-TermProject"}
                display_name={"Movie Ticket booking system (Java)"}
                description={"A course group project to make a Java app that allows to book tickets for a movie.  \
                    I worked on the backend, meaning the functions to access the MySQL database we had  \
                    running on our local machines."}
            />

            <ProjectLink link={"https://github.com/FDIL501st/ENCM511_gr6_Project-Codes/tree/main/AppProject2"}
                display_name={"A PIC32 project for light  (C + Python)"}
                description={"Programmed a PIC32 to configure the blinking speed of 3 small LED lights. \
                    The control is a simple Python GUI app which sends signals of \
                    lighting configuration selection to the PIC via a USB. \
                    I worked on the Python app and the initial C program of the PIC32. \
                    Circuit setup and debugging was done by my partner for this project."}
            />

            <ProjectLink link={"https://github.com/FDIL501st/pet-adoption-401"}
                display_name={"Pet adoption Site (Next.Js)"}
                description={"In a course group project, we made a site that \
                    can be used to browse pets and book an appointment to view them. \
                    We used fake pet data for showcasing the site. \
                    I worked on the backend. This included creating the MySQL database from the requirements we \
                    decided, and the functions for most pages that interacts with the database. \
                    The MySQL database exists on google cloud using credits, \
                    so the site will not be working as I ran out of credits to keep the database isntance running."}
            />
        </>
    )
}

export default AllProjects