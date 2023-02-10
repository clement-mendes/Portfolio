import "./card.css"
import lidl from "../../../assets/lidl.png"
import chariot from "../../../assets/chariot.png"


export default function CardLidl() {



    return (
        <div className="card">
            <div className="jobLogo">
                <img src={lidl} alt="logo" className="ikea"/>
            </div>
            <div className="descriptionJob">
                <div className="jobImage">
                    <img src={chariot} alt="dog" className="dogImage" />
                </div>
                <div className="jobTitle">
                    <p>Multi-skilled team member</p>
                </div>
                <div className="jobTasks">
                    <div>autonomy</div> <br />
                    <div className="mid">speed</div> <br />
                    <div>rigor</div> <br />
                </div>
                <div className="jobDate">
                    <div class='post-it'>
                        <h1>03/2019-07/2019</h1>
                    </div>
                </div>
            </div>
        </div>


    )
}