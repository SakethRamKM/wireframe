import React from 'react';
import './Team.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import TeamContent from '../../components/Team-content/TeamContent';

function Team() {
    return (
        <div className="team">
            <Sidebar />
            <TeamContent />
        </div>
    )
}

export default Team
