import "./card.css"
import comtazic from "../../../assets/comtazic.png"
import music from "../../../assets/music.png"


export default function CardComtazic() {



    return (
        <div className="card">
            <div className="jobLogo">
                <img src={comtazic} alt="logo" />
            </div>
            <div className="descriptionJob">
                <div className="jobImage">
                    <img src={music} alt="dog" className="dogImage" />
                </div>
                <div className="jobTitle">
                    <p>Front-end developper</p>
                </div>
                <div className="jobTasks">
                    <div>Reactjs/Nextjs</div> <br />
                    <div>Nodejs/Express</div> <br />
                    <div>Git/Azure</div> <br />
                </div>
                <div className="jobDate">
                    <div class='post-it'>
                        <h1>01/2023-02/2023</h1>
                    </div>
                </div>
            </div>
        </div>


    )
}