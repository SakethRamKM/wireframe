import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import DashboardContent from '../../components/Dashboard-content/DashboardContent';
import './Dashboard.scss';

function Dashboard() {
    return (
        <div className="dashboard">
            <Sidebar />
            <DashboardContent />
        </div>
    )
}

export default Dashboard
