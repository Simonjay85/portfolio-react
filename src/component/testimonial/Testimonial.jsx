import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Customers</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div> 
            <h5>Customer 1</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quia, perferendis nam nemo vitae aliquam magnam, dolorem sit pariatur labore obcaecati voluptatibus aliquid inventore reprehenderit accusamus sint impedit, corporis nihil?</small>
        </SwiperSlide>
        
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div> 
            <h5>Customer 2</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quia, perferendis nam nemo vitae aliquam magnam, dolorem sit pariatur labore obcaecati voluptatibus aliquid inventore reprehenderit accusamus sint impedit, corporis nihil?</small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div> 
            <h5>Customer 3</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quia, perferendis nam nemo vitae aliquam magnam, dolorem sit pariatur labore obcaecati voluptatibus aliquid inventore reprehenderit accusamus sint impedit, corporis nihil?</small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div> 
            <h5>Customer 4</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quia, perferendis nam nemo vitae aliquam magnam, dolorem sit pariatur labore obcaecati voluptatibus aliquid inventore reprehenderit accusamus sint impedit, corporis nihil?</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials