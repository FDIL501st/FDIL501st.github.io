import '../w3.css'
import { footer_id } from '../shared/id'


const Footer = () => {
    return (
        <footer id={footer_id} className="w3-border-top w3-border-black">
            <div className="w3-row w3-sand">
                {/* Content on left side, 
                small and medium window size take 4/12, 
                large window size 2/12*/}

                <div className="w3-container w3-col s4 l2">
                    <p>FDIL, 2024</p>

                    <a href="https://github.com/FDIL501st/FDIL501st.github.io/tree/page-dev" 
                        className="w3-hover-text-indigo"
                        >
                        Source Code
                    </a>
                    <br />
                    <a href="https://github.com/FDIL501st/FDIL501st.github.io/tree/gh-pages" 
                        className="w3-hover-text-indigo"
                        >
                        Deployment Branch
                    </a>
                </div>

            </div>
        </footer>
    )
}

// need to work on getting all text left aligned
// might want to look at w3-cell instead

export default Footer