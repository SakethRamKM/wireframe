import React from 'react';
import './TeamContent.scss';
import {team} from '../../assets/team-members';
import Mountain from '../../assets/Mountain.png'

function TeamContent() {
    return (
        <div className="team-content">
            <div className="team-content-title">
                <span>Meet the Team</span>
            </div>
            <div>
                <hr></hr>
            </div>
            <div>
                {team.map(member=><div className="team-member" key={member}>
                    <img className="member-image" src={Mountain}></img>
                    <span className="member-name">{member}</span>
                </div>)}
            </div>
        </div>
    )
}

export default TeamContent
