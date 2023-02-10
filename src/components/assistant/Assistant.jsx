import "./assistant.css"
import bot from "../../assets/bot.png";
import Chat from "../chat/Chat";
import Profile from "../profile/Profile";
import Experiences from "../experiences/Experiences";
import { useState, useEffect, useRef } from "react";



export default function Assistant() {

    const [choice, setChoice] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [display, setDisplay] = useState(false);
    const [botMessage, setBotMessage] = useState("Hello, I am Clément's assistant, I hope you are well. What can I do for you ?");

    useEffect(() => {
        const timer = setTimeout(async () => {
            setIsLoading(false)
        }, 3000)
        return () => clearTimeout(timer);
    }, [isLoading]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (choice?.id !== 3) {
                setDisplay(true);
            }
        }, 3100)

        return () => clearTimeout(timer);
    }, [isLoading]);


    function renderChoice(id) {
        switch (id) {
            case 1:
                return (
                    (!display ?
                        <Chat setChoice={setChoice} choice={choice} isLoading={isLoading} setIsLoading={setIsLoading} botMessage={botMessage} setBotMessage={setBotMessage} />
                        :
                        <Profile setChoice={setChoice} choice={choice} display={display} setDisplay={setDisplay} botMessage={botMessage} setBotMessage={setBotMessage} />
                    )
                );
            case 2:
                return (
                    !display ?
                        <Chat setChoice={setChoice} choice={choice} isLoading={isLoading} setIsLoading={setIsLoading} botMessage={botMessage} setBotMessage={setBotMessage} />
                        :
                        <Experiences setChoice={setChoice} choice={choice} display={display} setDisplay={setDisplay} />
                )
            case 3:
                return <Chat setChoice={setChoice} choice={choice} isLoading={isLoading} setIsLoading={setIsLoading} botMessage={botMessage} setBotMessage={setBotMessage} />;
            case 4:
                return <Profile setChoice={setChoice} choice={choice} />;
            default:
                return <Chat setChoice={setChoice} choice={choice} isLoading={isLoading} setIsLoading={setIsLoading} botMessage={botMessage} setBotMessage={setBotMessage} />;
        }

    }

    return (
        <div className="assistant">
            <div className="chat">
                <div className="topbar">
                    <div className="macButton">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                            <path fill="#f25056" d="M57 0C25.5 0 0 25.5 0 57s25.5 57 57 57 57-25.5 57-57S88.5 0 57 0z" />
                            <path fill="#9f1d2b"
                                d="M83.8 74.3L39.7 30.2c-2.6-2.6-6.9-2.6-9.6 0-2.6 2.6-2.6 6.9 0 9.6l44.1 44.1c2.6 2.6 6.9 2.6 9.6 0 2.7-2.7 2.7-7 0-9.6z" />
                            <path fill="#9f1d2b"
                                d="M39.7 83.8l44.1-44.1c2.6-2.6 2.6-6.9 0-9.6-2.6-2.6-6.9-2.6-9.6 0l-44 44.2c-2.6 2.6-2.6 6.9 0 9.6 2.6 2.6 6.9 2.6 9.5-.1z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                            <circle transform="rotate(-85.269 56.99 56.99)" cx="57" cy="57" fill="#fac536" r="57" />
                            <path d="M88.2 50.2H25.8c-3.7 0-6.8 3-6.8 6.8 0 3.7 3 6.8 6.8 6.8h62.4c3.7 0 6.8-3 6.8-6.8-.1-3.7-3.1-6.8-6.8-6.8z"
                                fill="#9d6525" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                            <path fill="#39ea49" d="M57 0C25.5 0 0 25.5 0 57s25.5 57 57 57 57-25.5 57-57S88.5 0 57 0z" />
                            <path fill="#0b7407"
                                d="M27.7 47v30.9c0 4.7 3.9 8.6 8.6 8.6h30.9c1.8 0 2.7-2.2 1.4-3.4L31.1 45.6c-1.2-1.3-3.4-.4-3.4 1.4zm50.4-18.4H47.3c-1.8 0-2.7 2.2-1.4 3.4l37.4 37.4c1.3 1.3 3.4.4 3.4-1.4V37.2c0-4.8-3.9-8.6-8.6-8.6z" />
                        </svg>
                    </div>
                    <div className="bot">
                        <img src={bot} alt="bot" className="botImage" />
                    </div>

                </div>
                <div className="message">
                    {renderChoice(choice?.id)}
                </div>
            </div>
        </div>
    );
}