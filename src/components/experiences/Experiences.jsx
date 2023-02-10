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

export default function Experiences() {

    const [goToSlide, setGoToSLide] = useState(0);
    const slides = [
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

    return (
        <div className="experiences">
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