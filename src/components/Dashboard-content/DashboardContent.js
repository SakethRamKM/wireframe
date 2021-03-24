import React, { Component } from 'react';
import './DashboardContent.scss';
import JSimage from '../../assets/Mountain.png';
import {connect} from 'react-redux';

class DashboardContent extends Component {
    render() {
        const {user}=this.props;
        return (
            <div className="dashboard-content">
                <div className="welcome-section">
                    <img className="welcome-section-image" src={JSimage}></img>
                    <div className="welcome-section-content">
                        <span>Welcome {user[0].userName}!</span>
                        <span className="last-login"><i>Last login: 23 Mar 2021</i></span>
                    </div>
                </div>
                <div>
                    <hr></hr>
                </div>
                <div className="account-section">
                    <span id="account-balance">Account Balance: ${user[0].balance}</span>
                    <table className="account-table">
                        <thead>
                            <tr>
                                <td>Date</td>
                                <td>Description</td>
                                <td>Amount</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>20-Mar-2021</td>
                                <td>Room Rent</td>
                                <td>{user[0].roomRent}</td>
                            </tr>
                            <tr>
                                <td>20-Mar-2021</td>
                                <td>Food</td>
                                <td>{user[0].food}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <hr></hr>
                </div>
                <div className="subscribe-section">
                    <div className="subscribe">
                        <span className="subscribe-to-alerts">Subscribe to Alerts</span>
                        <div>
                            <input type="checkbox" id="SMS"></input>
                            <label htmlFor="SMS">SMS Alert</label>
                        </div>
                        <div>
                            <input type="checkbox" id="Marketting Newsletter"></input>
                            <label htmlFor="Marketting Newsletter">Marketting Newsletter</label>
                        </div>
                        <div>
                            <input type="checkbox" id="Flyers"></input>
                            <label htmlFor="Flyers">Flyers</label>
                        </div>
                    </div>
                    <div className="data-binding">
                        <span className="two-way">Two Way Data Binding</span>
                        <input className="two-way-input" type="text" placeholder="Enter value for two way binding"></input>
                    </div>
                </div>
                <button className="submit">Submit</button>

            </div>
        )
    }
}


const mapStateToProps=state=>{
    return {
        user:state.filteredUser
    }
}

export default connect(mapStateToProps,null)(DashboardContent);
