import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const imageStyle ={
  width: '33%', height: '100%'
}
export default class About extends Component {
 

  render() {
    return (
      <Container fluid>
        <Row>
          <Col style={imageStyle}>
            <img src='https://3.imimg.com/data3/GQ/NB/MY-16212903/consultancy-service-500x500.jpg' />
          </Col>
          <Col style={{ width: '67%', height: 'auto' }}>
            <p style={{ color: 'black', fontSize: '1rem' }}>
            consulting firm is founded on the principles of excellence, rigor, honesty, transparency, and simplicity, and focused on complete and personalized solutions for our clients within Immigration, Staffing, IT Security, and Training & Development verticals. We are an energetic group of seasoned professionals coming from engineering, technology, and business operations backgrounds, coming together to provide unmatched customer experience within the Immigration, Staffing, Training, and IT Security domain.
            </p>
          </Col>
         </Row> 
      </Container>
    )
  }
}
