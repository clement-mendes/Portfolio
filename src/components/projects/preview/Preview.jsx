import "./preview.css"
import adopte1irc_logo from "../../../assets/adopte1irc_logo.png"
import adopte1IrcComputer from "../../../assets/adopte1IrcComputer.png"
import javascript from "../../../assets/logo.png"


export default function Preview({}) {

    return (
        <div className="preview">
            <div className="title">
                <img src={adopte1irc_logo} alt="logo" className="adopte1ircLogo" />
            </div>
            <div className="projectDescription">
                <div className="imageOfProject">
                    <div className="topBarImage">

                    </div>
                    <div className="backgroundImage">
                        <img src={adopte1IrcComputer} alt="image" className="adopte1IrcComputerImage" />
                    </div>
                </div>
                <div className="technologieUsed">
                    <div className="titleTechnologieUsed">
                        technologies used
                    </div>
                    <div className="technologieDescription">
                        <div className="rotation">
                            <img src={javascript} alt="" style={{ height: "5vh" }} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}