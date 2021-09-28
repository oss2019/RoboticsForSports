import React, { Component } from "react";
import Fade from "react-reveal";
import IITDh from "../FooterImages/IITDh.jpeg";
import RoboticsClub from "../FooterImages/RoboticsClub.jpeg";
import TechCouncil from "../FooterImages/TechCouncil.jpeg";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;


    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <div className="social-links" style={{display : 'flex', justifyContent: 'space-between'}}>
                <img src={IITDh} style={{ height: '150px' , width: '150px', borderRadius: '20px'}} alt = "logo"/>
                <img src={RoboticsClub} style={{ height: '150px' , width: '150px', borderRadius: '20px'}} alt = "logo"/>
                <img src={TechCouncil} style={{ height: '150px' , width: '150px', borderRadius: '20px'}} alt = "logo"/>
              </div>

              <ul className="copyright">
                <li style={{color : 'white'}}>&copy; Copyright 2021 OSS</li>
                {/* <li>
                  Design by{" "}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    Styleshout
                  </a>
                </li> */}
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
