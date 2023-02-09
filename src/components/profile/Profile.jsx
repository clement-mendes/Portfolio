import "./profile.css"

export default function Profile() {

    return (
        <div className="profile">
            <div className="salutation">
                <div className="hi">
                    Hi,<br />
                    I'm Clement,<br />
                    web developper
                </div>
            </div>
            {/* <div className="containerClientMessageBot">
                <div className="clientMessageBot">
                    I am a serious and respectful person. I give myself the means to succeed and I always bounce back despite the difficulties !
                </div>
            </div>
            <div className="containerClientMessageBot2">
                <div className="clientMessageBot">
                    If you want a sun in your team take me!
                </div>
            </div> */}
            <div className="clementDescription">
                <div className="descriptionBubble">
                    I am 23 years old, I am currently in my 3rd year at epitech.
                </div>
            </div>
            <div className="clementDescription">
                <div className="descriptionBubble">
                    I am looking for a block release training in web development from February 2023 to August 2025.
                    {/* The training will consist of two days of study (Mon/Tues) and Wednesday to Friday in the company. */}
                </div>
            </div>
            <div className="clementDescription">
                <div className="descriptionBubble">
                    The training will consist of two days of study (Mon/Tues) and Wednesday to Friday in the company.
                </div>
            </div>
            <div className="clementDescription">
                <div className="descriptionBubble">
                    <a href="https://eparcours.eu/epitech-pre-msc-msc-201/" target={"_blank"}>If you want more informations about my block release training.</a>
                </div>
            </div>

        </div>
    );
}