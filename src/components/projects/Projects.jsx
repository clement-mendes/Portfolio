import "./projects.css"
import Preview from "./preview/Preview";
import { useState } from "react";


export default function Projects({ setChoice, choice, display, setDisplay, botMessage, setBotMessage }) {

    const [showPreview, setShowPreview] = useState(false)

    let projects = [
        { id: 1, content: "Adopte1IRC" },
        { id: 2, content: "Adopte1Dashboard" },
        { id: 3, content: "Adopte1Job" },
    ]

    function handleClick() {
        setChoice(null);
        setDisplay(false);
        setBotMessage("Can i do something else for you ?")

    }

    function mouseOn(id) {
        setShowPreview(true);
    }

    function mouseOut(id) {
        setShowPreview(false);
    }

    return (

        <div className="projects">
            <p className="close" onClick={handleClick}>x</p>
            <div className="containerList">
                {projects.map((item, index) =>
                    < div className="projectsList" key={index} onMouseEnter={() => mouseOn(item?.id)} onMouseLeave={() => mouseOut(item?.id)} >
                        {item?.content}
                    </div>
                )}
            </div>
            {showPreview &&
                < div className="previewProject">
                    <Preview setChoice={setChoice} choice={choice} display={display} setDisplay={setDisplay} botMessage={botMessage} setBotMessage={setBotMessage} />
                </div>
            }
        </div >
    );
}