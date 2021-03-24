import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import AboutContent from '../../components/About-content/AboutContent';
import './About.scss';

function About() {
    return (
        <div className="about">
            <Sidebar />
            <AboutContent />
        </div>
    )
}

export default About
