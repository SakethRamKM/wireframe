import React, { Component } from 'react';
import './AboutContent.scss';
import JSimage from '../../assets/JS.png';
import Contact from '../Contact/Contact';

class AboutContent extends Component {
    render() {
        return (
            <div className="about-content">
                <div className="about-content-title">
                  <span>About iJavaScript</span>
                </div>
                <div>
                    <hr></hr>
                </div>
                <div className="about-content-theory">
                  <img className="jsimage" src={JSimage}></img>
                  <span className="js-theory">
                      iJavaScript is a research group, founded to check different javascript frameworks based on different design patterns.
                      <br></br>
                      <br></br>
                      During kick-off it will test React, Angular, Knockout and Ember JS features. This use case will prove different aspects of framework capabilities.
                  </span>
                </div>
                <div>
                    <hr></hr>
                </div>
                <Contact />
            </div>
        )
    }
}

export default AboutContent
