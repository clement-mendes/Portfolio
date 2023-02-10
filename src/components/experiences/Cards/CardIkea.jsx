import "./card.css"
import ikea from "../../../assets/Ikea.png"
import armoire from "../../../assets/armoire.png"



export default function CardIkea() {



    return (
        <div className="card">
            <div className="jobLogo">
                <img src={ikea} alt="logo" className="ikea"/>
            </div>
            <div className="descriptionJob">
                <div className="jobImage">
                    <img src={armoire} alt="dog" className="dogImage" />
                </div>
                <div className="jobTitle">
                    <p>Employee customers relations</p>
                </div>
                <div className="jobTasks">
                    <div>customers relationship</div> <br />
                    <div>Rigor</div> <br />
                    <div>Organization</div> <br />
                </div>
                <div className="jobDate">
                    <div class='post-it'>
                        <h1>10/2019-01/2021</h1>
                    </div>
                </div>
            </div>
        </div>


    )
}