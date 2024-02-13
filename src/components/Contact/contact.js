import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o1n04nq', 'template_tyfqdjf', form.current,  'lSbBiJB2x_8QTxtX9BgZJ', )
      .then(
        (result) => {
          console.log(result.text);
        e.target.reset();
        alert('Email Sent !');
       }, (error) => {
          console.log( error.text);
        },
      );
     };
    return (
        <section id="contactPage">
            <div id="clients">
        <h1 className="contactPageTitle">My clients</h1> 
        <p className="clientDesc"> 
           I have had the opportunity to work with a diverse group of companies.
           some of notable companies I have worked companies I have worked with includes
        </p>
        <div className="clientImgs">
            <img src= {Walmart} alt="Client" className="clientImg"/>
            <img src= {Adobe} alt="Client" className="clientImg"/>
            <img src= {Microsoft} alt="Client" className="clientImg"/>
            <img src= {Facebook} alt="Client" className="clientImg"/>

        </div>
            </div>
            <div id="contact">
           <h1 className="contactPageTitle">Contact Me</h1>
           <span className="contactDesc">Please fill out the form below to discuss any work oppuortunities</span>
           <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='your name'/>
            <input type="email" className="email" placeholder='Your Email' name='your email'/>
            <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className="links"> 
                <img src={FacebookIcon} alt="Facebook" className="link"/>
                <img src={TwitterIcon} alt="Twitter" className="link"/>
                <img src={YouTubeIcon} alt="Youtube" className="link"/>
                <img src={InstagramIcon} alt="Instagram" className="link"/>
            </div>
           </form>
            </div>
        </section>
    );
}

export default Contact