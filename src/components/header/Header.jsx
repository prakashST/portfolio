import React from 'react'
import Particles from './Particles'
import Typed from 'react-typed'
import './header.css'
import Resume from './PrakashST CV.pdf'

const Header = () => {
  return (
    <section id='home' className='header-wrapper'>
      <Particles />
      <div className='main-info'>
      
      <h2 className='home-txt'>Hello,It's Me</h2>
        <Typed
          className='typed-text'
          strings={[
            'Prakash',
            'UI Developer',
            'Front-end Developer',
            'React Js Developer',
            
          ]}
          typeSpeed={100}
          backSpeed={80}
          loop
        />
        <h3 className='home-txt'>From Tiruvannamalai,Tamil Nadu</h3>
        <p className='home-p-txt'>Explore my portfolio to witness my passion for web development in action.</p>
        <a download='prakashST.pdf' href={Resume} className='btn-main-offer'>
          Download
        </a>
      </div>
    </section>
  )
}

export default Header
