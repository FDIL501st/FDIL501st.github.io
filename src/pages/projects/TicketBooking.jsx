import GitHubLink from "../../components/GitHubLink"

import "../../w3.css"

const TicketBooking = () => {
    return (
        <div className="w3-content">
            <p>
                A course group project to make a Java app that allows to book tickets for a movie.  
                I worked on the backend, meaning the functions to access the MySQL database we had  
                running on our local machines.
            </p>
            <GitHubLink link="https://github.com/FDIL501st/ENSF480-GR31-TermProject" />
        </div>
    )
}

export default TicketBooking
