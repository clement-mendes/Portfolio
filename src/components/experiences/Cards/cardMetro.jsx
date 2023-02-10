import "./card.css"
import metro from "../../../assets/metro.png"
import chariot from "../../../assets/chariot.png"


export default function CardMetro() {



    return (
        <div className="card">
            <div className="jobLogo">
                <img src={metro} alt="logo" />
            </div>
            <div className="descriptionJob">
                <div className="jobImage">
                    <img src={chariot} alt="dog" className="dogImage" />
                </div>
                <div className="jobTitle">
                    <p>receiver</p>
                </div>
                <div className="jobTasks">
                    <div>Organisation</div> <br />
                    <div>Speed</div> <br />
                    <div>Quality control</div> <br />
                </div>
                <div className="jobDate">
                    <div class='post-it'>
                        <h1>06/2022-08/2022</h1>
                    </div>
                </div>
            </div>
        </div>


    )
}