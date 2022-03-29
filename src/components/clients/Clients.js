import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../clients/clients.css'
import image1 from './images/1.jpg';

export class Clients extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first: []
      }
    }
  render() {
    return (
        <Container className='client-container' fluid>
        <Row className='client-row'>
          <Col className='client-col marquee' style={{width: '100%'}}> 
          <span>Sponsor Sponsor Sponsor Sponsor Sponsor Sponsor Sponsor Sponsor Sponsor Sponsor Sponsor Sponsor</span></Col>
        </Row>
      </Container>
    )
  }
}

export default Clients