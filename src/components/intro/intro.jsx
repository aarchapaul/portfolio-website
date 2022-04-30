import "./intro.css"
import Me from "../../img/me-square.jpg"  /*insert my picture*/
import {Link} from "react-scroll";

const Intro = () => {
    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Aarcha Paul</h1>
                    <div className="i-title">Full-stack web developer</div>
                    <div className="i-desc">
                        <p>I design and develop websites that are fast, responsive and aesthetically pleasing.</p>
                        <br/>
                       <Link activeClass="active" to="pl-title" spy={true} smooth={true}>
                           <button className="i-button">See my work<span class="arrow"></span>
                           </button>
                       </Link>
                    </div>
                </div>
            </div>
            <div className="i-right">
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro