import React from 'react'
import './about.css'
import PicOfMe from './me.jpg'

const AboutMe = () => {
  return (
    <section id='about' className='container py-5 about-wrapper'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <h2 className='text-uppercase about-heading'>about me</h2>
          <p className='abtMe-txt'>Hello there! I'm <span className='span'>Prakash</span>, and I'm embarking on my 
                journey as a frontend developer. With a passion for crafting
                beautiful and functional web experiences, I'm excited to dive 
                into the world of web development.</p>
          <p className='abtMe-txt'>As a recent graduate, I've gained foundational skills in <span className='span'>HTML5, CSS3, and JavaScript and
           React Js.</span> I'm eager to apply and expand my knowledge in these technologies
                to create user-friendly and responsive websites.</p>
         <p className='abtMe-txt'>I'm passionate about web development because it's where creativity meets technology.
                Even as a newcomer, I'm eager to learn and grow in this ever-evolving field.</p>
        </div>
        <div className='col-lg-6 col-xm-12'>
          <div className='photo-wrap'>
            <img
              className='profile-img'
              src={PicOfMe}
              alt='Picture of Author'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
