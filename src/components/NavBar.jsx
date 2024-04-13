import '../w3.css'
import { Link } from 'react-router-dom'
import { nav_id } from '../shared/id'
import { home, about } from '../shared/path.js'


const NavBar = () => {
	return (
		<div class="w3-bar w3-black w3-xlarge" id={nav_id}>
			<Link to={home} class="w3-bar-item w3-button w3-mobile w3-padding-16">Home</Link>
			{/* <Link to={about} class="w3-bar-item w3-button w3-mobile w3-padding-16">About</Link> */}
		</div>
	)
}

export default NavBar