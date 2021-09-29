import React, { Component } from "react";
import {FiPhoneCall} from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi';
import {GoLocation} from 'react-icons/go';

class Contact extends Component {
  render() {
    if (!this.props.data) return null;
    return (
      <section id="contact" style={{paddingLeft: '60px', paddingRight: '60px', color: 'white',paddingTop: '80px'}}>
      <div style={{ textAlign : 'center', fontSize : '32px', marginBottom: '40px'}}>CONTACT</div>
        <div style = {{display : 'flex', justifyContent : 'space-around', margin :'auto'}}>
          <div style={{display: 'flex', flexDirection: 'column'}} className='feature col-lg-3'>
            <div style={{display: 'flex', justifyContent: 'center'}}>
           <FiPhoneCall style = {{fontSize: '18px'}}/> <span style={{marginLeft : '10px', fontSize : '20px', 
           color: 'silver'}}>Phone</span>
           </div>
           +91 78921 28329
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}} className='feature col-lg-3'>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <HiOutlineMail style = {{fontSize: '18px'}}/> <span style={{marginLeft : '10px', fontSize : '20px', 
            color: 'silver'}}>Email</span>
            </div>
            gstech@iitdh.ac.in
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}} className='feature col-lg-3'>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <GoLocation style = {{fontSize: '18px'}}/> <span style={{marginLeft : '10px', fontSize : '20px', 
            color: 'silver'}}>Location</span>
            </div>
            Indian Institute of Technology,<br/> Dharwad, Karnataka 580011
          </div>
           
        </div> 
      </section>
    );
  }
}

export default Contact;
