import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Problem Statements
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#timeline">
                Timeline
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#team">
                Our Team
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline" style={{marginTop : '20px'}}>{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>This Robotics contest as the name suggests, “Sporotech”, intrigues participants to ideate 
                and implement two practical models using Solidworks or Fusion360. One is allowed to register 
                for any number of problem statements, preferably in a team of 3-5 members. This event begins 
                from 1st October and submission deadline for both the problems is 23rd October. Registrants are 
                expected to come up with their cost-effective models according to the constraints  given  in 
                the problem statement. Exciting prizes await the (participants) and winners!</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="#" className="button btn project-btn">
                  <i className="fa fa-book"></i>Register Now!!
                </a>
                <a href="#about" className="button btn github-btn">
                  <i className="fa fa-book"></i>Problem Statement
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
