import React, { Component } from 'react'
import ImageSlider from '../imageslider/ImageSlider'
import Testimonials from '../testimonials/Testimonials'
import Clients from '../clients/Clients'
import '../applayout/applayout.css'
export class Home extends Component {
  render() {
    return (
      <div>
        <ImageSlider className='imageslider' />
        <Clients className='clients' />
        <Testimonials className='testimonials' />
      </div>
    )
  }
}

export default Home