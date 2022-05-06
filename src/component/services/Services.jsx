import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__icon'/>
              <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li>
              <BsCheck className='service__icon'/>
              <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li>
              <BsCheck className='service__icon'/>
              <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li>
              <BsCheck className='service__icon'/>
              <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li>
              <BsCheck className='service__icon'/>
              <p>Lorem ipsum dolor sit amet </p>
            </li>
            
          </ul>
        </article>
        {/* End of UX*/}
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__icon'/>
              <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li>
              <BsCheck className='service__icon'/>
              <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li>
              <BsCheck className='service__icon'/>
              <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li>
              <BsCheck className='service__icon'/>
              <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li>
              <BsCheck className='service__icon'/>
              <p>Lorem ipsum dolor sit amet </p>
            </li>
          </ul>
        </article>
        {/* End of WEb*/}
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__icon'/>
              <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li>
              <BsCheck className='service__icon'/>
              <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li>
              <BsCheck className='service__icon'/>
              <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li>
              <BsCheck className='service__icon'/>
              <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li>
              <BsCheck className='service__icon'/>
              <p>Lorem ipsum dolor sit amet </p>
            </li>
          </ul>
        </article>
        {/* End of Creation*/}
      </div>
    </section>
  )
}

export default Services