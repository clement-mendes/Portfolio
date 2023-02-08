import { useState, useRef } from "react";
import "./chat.css"

export default function Chat() {

    const [botMessage, setBotMessage] = useState("Hello, I am Clément's assistant, I hope you are well. What can I do for you ?")
    const [choice, setChoice] = useState(null);
    const [respchoice, setRespChoice] = useState(null);
    const [anotherchoice, setAnotherChoice] = useState(null);
    const newPropositions = useRef(null);

    let propositions = [
        {
            id: 1,
            description: "I want to know more about clement",
        },
        {
            id: 2,
            description: "I want to know more about clement's experiences",
        },
        {
            id: 3,
            description: "I want to contact clement",
        },
        {
            id: 4,
            description: "I want to see clement's projects",
        }
    ];

    function handleClick(item) {
        setChoice(item);
        switch (item?.id) {
            case 1:
                setRespChoice("Very good choice, my creator is a really interesting person");
                newPropositions.current =  propositions;
                newPropositions.current.splice(item?.id - 1, 1);
                break;
            case 2:
                setRespChoice("My creator is a worker, he did a lot of student jobs. Let me show you !");
                newPropositions.current =  propositions;
                newPropositions.current.splice(item?.id - 1, 1);
                break;
            case 3:
                setRespChoice("You want to contact my creator ? he has left in the bottom left corner all the means to discuss with him. You can even find his resume there.");
                setAnotherChoice("Can i do something else for you ?")
                newPropositions.current =  propositions;
                newPropositions.current.splice(item?.id - 1, 1);
          
                break;
            case 4:
                setRespChoice("I am one of the projects of my creator but not the only one! Let me show you the others!");
                newPropositions.current =  propositions;
                newPropositions.current.splice(item?.id - 1, 1);
                break;
        }
    }

    return (

        <div className="chatBox">
            <div className="botMessage">
                {botMessage}
            </div>
            {choice ? (
                <>
                    <div className="containerChoice">
                        <div className="choice">
                            {choice?.description}
                        </div>
                    </div>
                    <div className="botMessage">
                        {respchoice}
                    </div>
                    {anotherchoice &&
                        <>
                            <div className="botMessage">
                                {anotherchoice}
                            </div>
                            <div className="anotherChoice">
                                {newPropositions.current.map((item, index) =>
                                    <div className="clientMessage" key={index} onClick={() => handleClick(item)}>
                                        {item?.description}
                                    </div>
                                )}
                            </div>
                        </>
                    }
                </>
            ) : (
                <div className="containerClient">
                    {propositions.map((item, index) =>
                        <div className="clientMessage" key={index} onClick={() => handleClick(item)}>
                            {item?.description}
                        </div>
                    )}
                </div>
            )
            }
        </div>

    );
}