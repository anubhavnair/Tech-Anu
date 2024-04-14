import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"
const Services = () => {
  return (
    <div className='carousel'>
      <Carousel
      autoPlay
      showArrows = {false}
      showStatus = {false}
      showThumbs = {false}
      showIndicators = {false}
      infiniteLoop
      interval={2000}
      >
        <div>
            <img src={img1} alt="Service imga 1" />
            <p className='legend'>Full Stack</p>
        </div>
        <div>
            <img src={img2} alt="Service imga 2" />
            <p className='legend'>Ethical Hacking</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
