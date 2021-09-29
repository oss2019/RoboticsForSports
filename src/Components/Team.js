import React, { Component } from "react";
import {teamMembers1, teamMembers2} from '../TeamImages/memberDetails.js';
// import avatar from '../TeamImages/avatar.jpg';
import {data} from '../TeamImages/memberDetails.js';

class Team extends Component {
  render() {
    if (!this.props.data) return null;
    return (
      <section id="team" style={{paddingLeft: '60px', paddingRight: '60px', color: 'white',padding: '5rem 0'}}>
      <div style={{ textAlign : 'center', color: '#fff', fontSize : '32px', marginBottom: '40px'}}>TEAM</div>
      <div style={{display: 'flex', justifyContent : 'space-evenly'}}>
        {    teamMembers1.map(data => (
                    <div>
                      <img src={data.url} style={{height: '150px', width: '150px', borderRadius: '50%'}} alt="Images" /><br/>
                      <span style={{color: 'white',textAlign: 'center', display: 'flex', justifyContent:'center'}}>{data.name}</span>
                    </div>
                  ))
        }
      </div>
      <br /><br /><br />
      <div style={{display: 'flex', justifyContent : 'space-evenly'}}>
        {    teamMembers2.map(data => (
                    <div>
                      <img src={data.url} style={{height: '150px', width: '150px', borderRadius: '50%'}} alt="Images" /><br/>
                      <span style={{color: 'white',textAlign: 'center', display: 'flex', justifyContent:'center'}}>{data.name}</span>
                    </div>
                  ))
        }
      </div>
      </section>
    );
  }
}

export default Team;
