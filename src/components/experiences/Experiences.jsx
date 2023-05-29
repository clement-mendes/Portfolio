import Carousel from "react-spring-3d-carousel";
import "./experiences.css"
import { v4 } from "uuid";
import { config } from "react-spring";
import { useState } from "react";
import CardMedor from "./Cards/CardMedor";
import CardComtazic from "./Cards/CardComtazic";
import CardMetro from "./Cards/cardMetro";
import CardIkea from "./Cards/CardIkea";
import CardLidl from "./Cards/cardLidl";
import CardAtos from "./Cards/CardAtos";

export default function Experiences({choice, setChoice, display, setDisplay}) {

    const [goToSlide, setGoToSLide] = useState(0);
    const slides = [
        {
            key: v4(),
            content: <CardAtos />
        },
        {
            key: v4(),
            content: <CardComtazic />
        },
        {
            key: v4(),
            content: < CardMedor/>
        },
        {
            key: v4(),
            content: <CardMetro />
        },
        {
            key: v4(),
            content: <CardLidl />
        },
        {
            key: v4(),
            content: <CardIkea />
        },
    ].map((slide, index) => {
        return { ...slide, onClick: () => setGoToSLide(index) };
    });

    function handleClick() {
        setChoice(null);
        setDisplay(null);
    }

    return (
        <div className="experiences">
            <p className="close" onClick={handleClick}>x</p>
            <div className="cardBox">
                <Carousel
                    slides={slides}
                    goToSlide={goToSlide}
                    offsetRadius={2}
                    animationConfig={config.gentle}
                />
            </div>
        </div>
    );
}