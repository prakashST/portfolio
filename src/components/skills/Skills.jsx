import React from 'react'
import './skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { services } from './data'

const Skills = () => {
  return (
    <section id='skills' className='services'>
      <h1 className='py-5'>Skills</h1>
      <div className='container'>
        <div className='row'>
          {services.map((item, key) => (
            <div className='col-md-4 col-sm-6' key={key}>
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon className='icons' icon={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p className='skill-description'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
