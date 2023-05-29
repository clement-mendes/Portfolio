import "./card.css";
import atos from "../../../assets/Atos_logo.png";
import web from "../../../assets/web.png";

export default function CardAtos() {
  return (
    <div className="card">
      <div className="jobLogo">
        <img src={atos} alt="logo" className="atos-logo"/>
      </div>
      <div className="descriptionJob">
        <div className="jobImage">
          <img src={web} alt="dog" className="dogImage" />
        </div>
        <div className="jobTitle">
          <p>Developper full-stack</p>
        </div>
        <div className="jobTasks">
          <div>VueJS</div> <br />
          <div>NodeJS/Express</div> <br />
          <div>OpenLayer/GeoServer</div> <br />
        </div>
        <div className="jobDate">
          <div class="post-it">
            <h1>04/2023-Now</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
