import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='space'>What Skills I Have</h5>
      <h2>My Experience</h2>
      
      <div className='container experience__container'>
          <div className="experience__frontend">
            

            <div className="experience__contents">

              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </article>

              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon' />
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </article>

              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </article>

              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </article>

            </div>
          </div>
          </div>
    </section>     
     
          
      

    
  )
}

export default Experience