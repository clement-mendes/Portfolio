import "./navbar.css"
import Logo from "../../assets/logo.png"
import resume from "../../assets/resume.pdf"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function NavBar() {





    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo" className="logo"/>
            </div>
            <div className="categories">
                <div>
                    <a className="list">01.</a>
                    <a href="" className="section">About</a>
                </div>
                <div>
                    <a className="list">02.</a>
                    <a href="" className="section">Experience</a>
                </div>
                <div>
                    <a className="list">03.</a>
                    <a href="" className="section">Work</a>
                </div>
                <div>
                    <a className="list">04.</a>
                    <a href="" className="section">Contact</a>
                </div>
                <button className="resume">
                    <a href={resume} target={"_blank"}  className="resumeText">
                        Resume
                    </a>
                </button>
               
            </div>

        </div>
    );
}