import React from 'react';
import './Navigator.scss';
import { withRouter } from 'react-router-dom';

function Navigator({match,history}){
        return (
            <div className="navigator">
                <span className={`link ${match.path==='/dashboard'?'active-link':null}`} onClick={()=>history.push('/dashboard')}>DASHBOARD</span>
                <div><hr></hr></div>
                <span className={`link ${match.path==='/about'?'active-link':null}`} onClick={()=>history.push('/about')}>ABOUT</span>
                <div><hr></hr></div>
                <span className={`link ${match.path==='/team'?'active-link':null}`} onClick={()=>history.push('/team')}>TEAM</span>
            </div>
        )
    }

export default withRouter(Navigator);
