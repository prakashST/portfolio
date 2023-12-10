import React from 'react'
import './education.css'
import { experience } from './data'

const Education = () => {
  return (
    <section id='education' className='experience'>
      <div className='d-flex justify-content-center my-5'>
        <h1>Education</h1>
      </div>
      <div className='container experience-wrapper'>
        {experience.map((item, key) => {
          if (item.id % 2 != 1) {
            return (
              <div className='timeline-block timeline-block-right' key={key}>
                <div className='marker'></div>
                <div className='timeline-content'>
                  <h3>{item.title}</h3>
                  <h4>{item.description}</h4>
                </div>
              </div>
            )
          } else {
            return (
              <div className='timeline-block timeline-block-left' key={key}>
                <div className='marker'></div>
                <div className='timeline-content'>
                  <h3>{item.title}</h3>
                  <h4>{item.description}</h4>
                </div>
              </div>
            )
          }
        })}
      </div>
    </section>
  )
}

export default Education;
