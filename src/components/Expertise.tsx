import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Adobe Photoshop",
    "Figma",
    "JavaScript",
    "Canva"
];

const labelsSecond = [
    "Kali Linux",
    "Python",
    "AWS Security Hub",
    "Bash",
    "Azure",
    
];

const labelsThird = [
    "HTML",
    "CSS",
    "JavaScript"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    
                    <h3>Visual Communication & Graphic Design</h3>
                    <p>I have created clean, engaging designs that communicate ideas visually and effectively. My work includes projects like posters, logos, social media graphics, basic brand kits, and simple UI mockups using tools such as Figma, Canva, and Adobe Creative Suite.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    
                    <h3>Cyber Security</h3>
                    <p>Hands-on experience in securing digital infrastructures through policy-driven cyber drills, malware analysis, and network security assessments. Focused on strengthening systems against real-world threats.</p>
                    <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                        
                    </div>
                </div>

                <div className="skill">
                    
                    <h3>Web Design & Development</h3>
                    <p>I design and build responsive, user-friendly websites using HTML, CSS, JavaScript, and modern frameworks.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;