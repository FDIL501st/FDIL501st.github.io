import GitHubLink from "../../components/GitHubLink"
import pet_pursuit_home from '../../images/pet_pursuit_home.png'
import pet_pursuit_animal from '../../images/pet-pursuit.png'
import pet_pursuit_booking from '../../images/pet_pursuit_booking.png'

import "../../w3.css"

const PetAdoption = () => {
    return (
        <div className="w3-content">
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

            <GitHubLink link={"https://github.com/FDIL501st/pet-adoption-401"} />

            <img src={pet_pursuit_home} alt="Pet Pursuit Home Page" style={{maxWidth:"100%"}}/>
            <img src={pet_pursuit_animal} alt="Pet Pursuit View Animal" style={{maxWidth:"100%"}}/>
            <img src={pet_pursuit_booking} alt="Pet Pursuit Booking" style={{maxWidth:"100%"}}/>
        </div>
    )
}

export default PetAdoption