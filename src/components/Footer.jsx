import '../w3.css'
import { footer_id } from '../shared/id'


const Footer = () => {
    return (
        <footer id={footer_id}>
            <div className="w3-display-container w3-border-top w3-border-black">
                <p className="w3-display-topleft">FDIL, 2024</p>
            </div>
        </footer>
    )
}

export default Footer