import GitHubLink from "../../components/GitHubLink"
import invoicify_dashboard from '../../images/invoicify_dashboard.png'
import invoicify_create from '../../images/invoicify_create_invoice_60_zoom.png'
import invoicify_view from '../../images/invoicify_view_invoice_70_zoom.png'

import "../../w3.css"


const Invoicify = () => {
    return (
        <div className="w3-content">
            <p>
                A course group project in which we made an online tool for businesses to create invoices
                for their clients. The vision was to allow for clients to view and pay invoices without needing
                to create their an account with the app.
            </p>

            <p>
                I mainly worked on the forms in this project. The checking of fields inputted and 
                the POST function that gets called upon entering the form. 
            </p>

            <GitHubLink link={"https://github.com/FDIL501st/cpsc471finalproject"} />

            <img src={invoicify_create} alt="Create invoice page" style={{maxWidth:"100%"}}/>
            <img src={invoicify_view} alt="View invoice page" style={{maxWidth:"100%"}}/>
            <img src={invoicify_dashboard} alt="Dashboard page" style={{maxWidth:"100%"}}/>
        </div>
    )
}

export default Invoicify