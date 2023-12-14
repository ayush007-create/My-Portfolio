import React, { useState } from 'react'
import PropTypes from 'prop-types'
import contactUs from '../assets/img/contact-img.svg'
import bgImg from '../assets/img/color-sharp2.png'
import bgImg1 from '../assets/img/color-sharp.png'
import 'animate.css';
function Contact(props) {
    const initialformdetails={
        firstname:'',
        lastname:'',
        email:'',
        phonenumber:'',
        message:''
    }
    const [formDetails,setDetails] = useState(initialformdetails)
    const [buttonText,setText] = useState('Send')
    const [status,setStatus] = useState({})

    const onformUpdate = (category,value)=>{
        setDetails({
            ...formDetails,
            [category]:value
        })
    }
    const handleSubmit= async(e)=>{
        console.log("form submitted")
        e.preventDefault();
        setText("Sending...");
        let response = await fetch("http://localhost:3000", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        });
        setText("Send");
        let result = await response.json();
        setDetails(initialformdetails);
        if (result.code === 200) {
          setStatus({ succes: true, message: 'Message sent successfully'});
        } else {
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        }
    }

  return (
        <section className="contact" id="connect">
        <div className="container">
            <div className="row align-items-center">
                <div  xs={9} sm={5} md={3} lg={8} className="col">
                <img src={contactUs} alt="contactUs" />
                </div>
                <div xs={4} sm={6} md={3} className="formcol col mx-3">
                <h2 style={{textAlign:'center'}}>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                    <div className="row" id='row1'>
                        <div className="col" >
                            <input type="text" value={formDetails.firstname} placeholder="First Name" onChange={(e) => onformUpdate('firstname',e.target.value)} />
                        </div>
                        <div className="col">
                        <input type="text" value={formDetails.lastname} placeholder="Last Name" onChange={(e) => onformUpdate('lastname',e.target.value)} />
                        </div>
                    </div>
                    <div className="row my-3" id='row2'>
                        <div className="col">
                            <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onformUpdate('email',e.target.value)} />
                        </div>
                        <div className="col">
                            <input type="tel" value={formDetails.phonenumber} placeholder="Phone Number" onChange={(e)=> onformUpdate('phonenumber',e.target.value)} />
                        </div>
                    </div>
                    <div className="row my-3" id='row3'>
                        <div className="col">
                            <textarea value={formDetails.message} placeholder="Message" cols="65" rows="6" onChange={(e) => onformUpdate('message',e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col">
                        <button type="button"><span>{buttonText}</span></button>
                        </div>
                        <div className="col">
                        {
                            status.message &&
                            <p className={status.success === false ? 'Danger':'success'}>{status.message}</p>
                        }
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

