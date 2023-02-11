import "./projects.css"
import Preview from "./preview/Preview";
import { useState } from "react";


export default function Projects({ setChoice, choice, display, setDisplay }) {

    const [showPreview, setShowPreview] = useState(false)

    let projects = [
        { id: 1, content: "Adopte1IRC" },
        { id: 2, content: "Adopte1Dashboard" },
        { id: 3, content: "Adopte1Job" },
    ]


    function mouseOn(id) {
        setShowPreview(true);
    }

    function mouseOut(id){
        setShowPreview(false);
    }

    return (

        <div className="projects">
            <div className="containerList">
                {projects.map((item, index) =>
                    < div className="projectsList" key={index} onMouseEnter={() => mouseOn(item?.id)} onMouseLeave={() => mouseOut(item?.id)} >
                        {item?.content}
                    </div>
                )}
            </div>
            {!showPreview &&
                < div className="previewProject">
                    <Preview />
                </div>
            }
        </div >
    );
}