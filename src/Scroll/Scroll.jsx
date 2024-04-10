import './Scroll.css';


const toTop = () => {
    const top = document.getElementById("nav")
    top.scrollIntoView({behavior: "smooth"})
}

const toBottom = () => {
    const bottom = document.getElementById("footer")
    bottom.scrollIntoView({behavior: "smooth"})
}

const Scroll = () => {

    return (
        <div className="Scroll">
            <button className="w3-button w3-circle Scroll" onClick={toTop}>
                &uarr;
            </button>

            <button className="w3-button w3-circle Scroll" onClick={toBottom}>
                &darr;
            </button>
        </div>
    )
}

export default Scroll