import "./card.css"
import medor from "../../../assets/medor_et_compagnie.png"
import dog from "../../../assets/dog.png"


export default function CardMedor() {



    return (
        <div className="card">
            <div className="jobLogo">
                <img src={medor} alt="logo" />
            </div>
            <div className="descriptionJob">
                <div className="jobImage">
                    <img src={dog} alt="dog" className="dogImage" />
                </div>
                <div className="jobTitle">
                    <p>Store manager</p>
                </div>
                <div className="jobTasks">
                    <div>Store opening/closing</div> <br />
                    <div>Cash management</div> <br />
                    <div>Customer management</div> <br />
                </div>
                <div className="jobDate">
                    <div class='post-it'>
                        <h1>01/2021-09/2022</h1>
                    </div>
                </div>
            </div>
        </div>


    )
}