import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  return (
    <section id='contact'>
    <h5>Get in touch</h5>
    <h2>Contact</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className='contact__option'>
          <MdEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>simonjay0805@gmail.com</h5>
          <a href="mailto:simonjay0805@gmail.com" target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'>
          <BsMessenger className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Simon Jay</h5>
          <a href="https://www.messenger.com/t/100080491560450/" target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'>
           <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+12265800805</h5>
          <a href="https://api.whatsapp.com/send?phone=12265800805" target='_blank'>Send a message</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS*/}
      <form action="">
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>     
      </form>
    </div>
    </section>
  )
}

export default Contact