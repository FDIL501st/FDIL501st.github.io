import '../w3.css'
import { Link } from 'react-router-dom'


const NavBar = () => {
	return (
		<div class="w3-bar w3-black" id="nav">
			<Link to="/" class="w3-bar-item w3-button w3-mobile">Home</Link>
		</div>
	)
}

export default NavBar