import '../w3.css'
import { footer_id } from '../shared/id'


const Footer = () => {
    return (
        <footer id={footer_id}
        className="w3-display-container w3-border-top w3-border-black">
            <p className="w3-display-left w3-section">FDIL, 2024</p>
        </footer>
    )
}

export default Footer