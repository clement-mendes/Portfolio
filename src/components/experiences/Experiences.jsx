import Carousel from "react-spring-3d-carousel";
import "./experiences.css"
import { v4 } from "uuid";
import { config } from "react-spring";
import { useState } from "react";
import Card from "./Card/Card";

export default function Experiences() {

    const [goToSlide, setGoToSLide] = useState(0);
    const slides = [
        {
            key: v4(),
            content: <Card />
        },
        // {
        //     key: v4(),
        //     content: <img src="https://picsum.photos/800/801/?random" alt="1" />
        // },
        // {
        //     key: v4(),
        //     content: <img src="https://picsum.photos/800/802/?random" alt="2" />
        // },
        // {
        //     key: v4(),
        //     content: <img src="https://picsum.photos/600/803/?random" alt="3" />
        // },
        // {
        //     key: v4(),
        //     content: <img src="https://picsum.photos/800/500/?random" alt="4" />
        // },
        // {
        //     key: v4(),
        //     content: <img src="https://picsum.photos/800/804/?random" alt="5" />
        // },
        // {
        //     key: v4(),
        //     content: <img src="https://picsum.photos/500/800/?random" alt="6" />
        // },
        // {
        //     key: v4(),
        //     content: <img src="https://picsum.photos/800/600/?random" alt="7" />
        // },
        // {
        //     key: v4(),
        //     content: <img src="https://picsum.photos/805/800/?random" alt="8" />
        // },
        // {
        //     key: v4(),
        //     content: <img src="https://picsum.photos/805/800/?random" alt="8" />
        // }
    ].map((slide, index) => {
        return { ...slide, onClick: () => setGoToSLide(index) };
    });

    return (
        <div className="experiences">
            <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
                <Carousel
                    slides={slides}
                    goToSlide={goToSlide}
                    offsetRadius={8}
                    showNavigation={true}
                    animationConfig={config.gentle}
                />
            </div>
        </div>
    );
}