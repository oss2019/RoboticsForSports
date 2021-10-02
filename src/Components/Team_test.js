import React, { Component } from "react";
import {teamMembers1, teamMembers2} from '../TeamImages/memberDetails.js';
import './style.css';

class Team extends Component {
  render() {
    return (
        <body>
        <div style={{ textAlign : 'center', color: '#fff', fontSize : '32px', marginBottom: '40px'}}>TEAM</div>
        <div class="grid">
            {    teamMembers1.map(data => (
                <div class="col-25">
                <div class="block gutter">
                    <div>
                      <img src={data.url} className="image"  alt="Images" /><br/>
                      <span style={{color: 'white',textAlign: 'center', display: 'flex', justifyContent:'center'}}>{data.name}</span>
                    </div>
                    </div>
                </div>
                  ))
            }
            <div class="clear"></div>
        {    teamMembers2.map(data => (
                <div class="col-25">
                <div class="block gutter">
                    <div>
                      <img src={data.url} className="image" alt="Images" /><br/>
                      <span style={{color: 'white',textAlign: 'center', display: 'flex', justifyContent:'center'}}>{data.name}</span>
                    </div>
                    </div>
                </div>
                  ))
            }
         <div class="clear"></div>
    </div>
    </body>
    );
  }
}

export default Team;
