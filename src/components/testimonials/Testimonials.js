import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../testimonials/testimonials.css'
import Testimonialcard from './Testimonialcard'
export class Testimonials extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first: []
    }
  }
  render() {
    return (
      <Container className='testimonial-container' fluid>
        <Row className='testimonial-row'>
          <Col className='testimonial-col' style={{ width: '25%' }}><Testimonialcard /></Col>
          <Col className='testimonial-col' style={{ width: '25%' }}><Testimonialcard /></Col>
          <Col className='testimonial-col' style={{ width: '25%' }}><Testimonialcard /></Col>
          <Col className='testimonial-col' style={{ width: '25%' }}><Testimonialcard /></Col>
        </Row>
      </Container>
    )
  }
}

export default Testimonials