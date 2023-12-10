import React, { useEffect } from 'react';
import './conForm.css'
import { faPaperPlane,faEnvelope,faPhone, faLocationDot,faHome} from '@fortawesome/free-solid-svg-icons';
import {faGithub,faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon,} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// import img from "./me.jpg"

const Contact = () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwW73z8qHj5XSUT3zzI5ppG79KzwT-D4a9SqJS4-ZFJg74LSeWm5VRrPGYtAqf5v61Y/exec'; // Replace with your script URL

  useEffect(() => {
    const form = document.forms['submit-to-google-sheet'];
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const formData = new FormData(form);
        const response = await fetch(scriptURL, { method: 'POST', body: formData });
        if (response.ok) {
          console.log('Success!', response);
          // Reset the form if needed
          form.reset();
        } else {
          console.error('Error in form submission:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    };

    form.addEventListener('submit', handleSubmit);

    // Cleanup the event listener on unmount
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []); // Empty dependency array to run this effect only once

  return (
   
    <div id='contact'>
       <div className='d-flex justify-content-center my-5'>
        <h1>Contact Me</h1></div>
    <div className="formContainer">
    <form className='form-cont' name="submit-to-google-sheet">
    <div className='form-div'>
    <h4>Send your Message here&#128071;</h4>
      <label for="name">Name</label><br />
      <input type="text" name="Name" placeholder="Name" id='name'/><br />
      <label for="">Email</label><br />
      <input type="email" name="Email" placeholder="Email" /><br />
      <label for="">Message</label><br />
      <textarea name="Message" placeholder="Message"></textarea><br />
      <button className='form-Submit' type="submit">Send Message <FontAwesomeIcon icon={faPaperPlane}/></button>
      </div>
      <div className='form-div2'>
        {/* <img className='form-img' src={img} alt="I'm" /> */}
         <label ><FontAwesomeIcon icon={faEnvelope}/> Email</label>
        <p className='contact-par'> prakashst0028@gmail.com</p>
        <label ><FontAwesomeIcon icon={faPhone}/> Phone</label>
        <p className='contact-par'>+91 9159450516</p>
        <label ><FontAwesomeIcon icon={faLocationDot}/> Email</label>
        <p className='contact-par'> prakashst0028@gmail.com</p>
        <label className='con-icon'> <a href="https://github.com/prakashST"><FontAwesomeIcon icon={faGithub}/></a> </label>
        <label  className='con-icon'> <a href="https://www.instagram.com/y_r15_prakash_46/"><FontAwesomeIcon icon={faInstagram}/></a></label>
      </div>
      
    </form>
    <p className='con-home'>
        <a href="#home">
        <FontAwesomeIcon icon={faHome}/>
        </a>
      </p>
    </div>
    </div>
  );
};

export default Contact;
