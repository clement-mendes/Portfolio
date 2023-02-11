import "./preview.css"
import adopte1irc_logo from "../../../assets/adopte1irc_logo.png"
import adopte1IrcComputer from "../../../assets/adopte1IrcComputer.png"


export default function Preview() {

    return (
        <div className="preview">
            <div className="title">
                <img src={adopte1irc_logo} alt="logo" className="adopte1ircLogo" />
            </div>
            <div className="projectDescription">
                <div className="imageOfProject">
                    <div className="topBarImage">

                    </div>
                    <div className="backgroundImage"  style={{ backgroundImage: `url(${adopte1IrcComputer})`}}>
                        
                    </div>
                </div>
            </div>
        </div>
    );

}