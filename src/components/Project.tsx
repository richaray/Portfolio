import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://httpstat.us/404" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://httpstat.us/404" target="_blank" rel="noreferrer"><h2>NIT Mizoram Mobile App</h2></a>
                <p>Developed a cross-platform mobile app for NIT Mizoram using Flutter to provide students with easy access to campus updates, schedules, and essential resources.</p>
            </div>
            <div className="project">
                <a href="https://gdg-nitmizoram.vercel.app/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://gdg-nitmizoram.vercel.app/" target="_blank" rel="noreferrer"><h2>GDG Website</h2></a>
                <p>Designed, developed, and launched website for Google Developers Group on campus NIT Mizoram.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;