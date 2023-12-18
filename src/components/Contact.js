import React, { useState } from 'react'
import PropTypes from 'prop-types'
import contactUs from '../assets/img/contact-img.svg'
import bgImg from '../assets/img/color-sharp2.png'
import bgImg1 from '../assets/img/color-sharp.png'
import 'animate.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact(props) {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log("Function Called")
        emailjs.sendForm('service_pt1t0kn', 'template_ai1se9g', form.current, '-xkx81LQSVjwHgwDB')
          .then((result) => {
              console.log(result.text);
              console.log("message sent")
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
        <section className="contact" id="connect">
        <div className="container">
            <div className="row align-items-center">
                <div  xs={9} sm={5} md={3} lg={8} className="col">
                <img src={contactUs} alt="contactUs" />
                </div>
                <div xs={4} sm={6} md={3} className="formcol col mx-3">
                <h2 style={{textAlign:'center'}}>Get In Touch</h2>
                    <form ref={form} onSubmit={sendEmail}>
                    <div className="row" id='row1'>
                        <div className="col" >
                            <input type="text" name='user_first_name' placeholder="First Name"/>
                        </div>
                        <div className="col">
                        <input type="text"  name='user_last_name' placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="row my-3" id='row2'>
                        <div className="col">
                            <input type="email" name='user_email' placeholder="Email"/>
                        </div>
                        <div className="col">
                            <input type="tel" name='user_phonenumber' placeholder="Phone Number" />
                        </div>
                    </div>
                    <div className="row my-3" id='row3'>
                        <div className="col">
                            <textarea placeholder="Message" name='message' cols="65" rows="6"></textarea>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col d-flex flex-row">
                        <input id='Submit' type="submit" value="Send"/>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <img  className='bg-image-left' src={bgImg1} alt="" />
        <img  className='bg-image-right' src={bgImg} alt="" />
    </section>
  )
}

Contact.propTypes = {

}

export default Contact

