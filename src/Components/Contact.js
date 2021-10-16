import React, { Component } from "react";
import {FiPhoneCall} from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi';
import {GoLocation} from 'react-icons/go';
import './styles.css';

class Contact extends Component {
  render() {
    if (!this.props.data) return null;
    return (
      <body>
      <section id="contact" style={{paddingLeft: '60px', paddingRight: '60px', color: 'white',padding: '2rem'}}>
      <div style={{ textAlign : 'center', color: '#fff', fontSize : '32px', marginBottom: '40px'}}>CONTACT US</div>
        <div className='element_container'>
          <div className='elements'>
            <div style={{ justifyContent: 'center'}}>
           <FiPhoneCall style = {{fontSize: '18px'}}/> <span style={{fontSize : '20px', 
           color: 'silver'}}>Phone</span>
           </div>
           +91 78921 28329
          </div>
          <div className='elements'>
            <div style={{justifyContent: 'center'}}>
            <HiOutlineMail style = {{fontSize: '18px'}}/> <span style={{fontSize : '20px', 
            color: 'silver'}}>Email</span>
            </div>
            gstech@iitdh.ac.in
          </div>
          <div className='elements'>
            <div style={{justifyContent: 'center'}}>
            <GoLocation style = {{fontSize: '18px'}}/> <span style={{fontSize : '20px', 
            color: 'silver'}}>Location</span>
            </div>
            <div className='address'>
            Indian Institute of Technology,<br/> Dharwad, Karnataka 580011
            </div>
          </div>
           
        </div> 
       <br/><br/>
      </section>
      </body>
    );
  }
}

export default Contact;
