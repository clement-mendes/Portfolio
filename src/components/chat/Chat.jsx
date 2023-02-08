import { useState } from "react";
import "./chat.css"

export default function Chat() {

    const [botMessage, setBotMessage] = useState("Bonjour je suis l'assistant de clément, j'espère que vous allez bien. Que puis-je faire pour vous ?")
    const [clientMessage, setClientMessage] = useState("Bonjour je suis l'assistant de clément, j'espère que vous allez bien. Que puis-je faire pour vous ?")




    return (

        <div className="chatBox">
            <div className="botMessage">
                {botMessage}
            </div>
            <div className="clientMessage">
                {clientMessage}
            </div>
        </div>
        
    );
}