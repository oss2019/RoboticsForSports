import React, { Component } from "react";
import {teamMembers} from '../TeamImages/memberDetails.js';

class Team extends Component {
  render() {
    if (!this.props.data) return null;
    return (
      <section id="team" style={{paddingLeft: '60px', paddingRight: '60px', color: 'white',padding: '5rem 0'}}>
      <div style={{ textAlign : 'center', color: '#fff', fontSize : '32px', marginBottom: '40px'}}>TEAM</div>
      <div style={{display: 'flex', justifyContent : 'space-evenly', flexWrap: 'wrap'}}>
        {    teamMembers.map(data => (
                    <div style={{width: '210px', margin: '15px', minWidth: '150px', flex: '0 0 21%'}}>
                      <div>
                        <img src={data.url} style={{display: 'block', margin: 'auto', height: '150px', width: '150px', borderRadius: '50%'}} alt="Images" />
                      </div>
                      <div>
                        <span style={{padding: '5px', color: 'white',textAlign: 'center', display: 'flex', justifyContent:'center'}}>{data.name}</span>
                      </div>
                    </div>
                  ))
        }
      </div>
      </section>
    );
  }
}

export default Team;
