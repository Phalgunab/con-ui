 import React, { Component } from 'react'
 import '../testimonials/testimonials.css'
 export class Testimonialcard extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          first: []
       }
     }

   render() {
     return (
       <div>
           <small>
           This is a testimonial space. This is a testimonial space. This is a testimonial space.
           This is a testimonial space. This is a testimonial space. This is a testimonial space.
           This is a testimonial space. This is a testimonial space. This is a testimonial space.
           This is a testimonial space. This is a testimonial space. This is a testimonial space.
           </small>
           <br />
           <img className='testimonial-img' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1"/>
       </div>
     )
   }
 }
 
 export default Testimonialcard