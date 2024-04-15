import '../w3.css'
import { footer_id } from '../shared/id'


const Footer = () => {
    return (
        <footer id={footer_id} className="w3-border-top w3-border-black">
            <div className="w3-container w3-sand">
                <p className="w3-left">FDIL, 2024</p>
                <p className="w3-left"></p>
            </div>
        </footer>
    )
}

export default Footer