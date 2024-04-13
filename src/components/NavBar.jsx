import '../w3.css'
import { Link } from 'react-router-dom'


const NavBar = () => {
	return (
		<div class="w3-bar w3-black w3-xlarge" id="nav">
			<Link to="/" class="w3-bar-item w3-button w3-mobile w3-padding-16">Home</Link>
		</div>
	)
}

export default NavBar