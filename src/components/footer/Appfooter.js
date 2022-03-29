import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../footer/footer.css';

export class Appfooter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first: []
    }
  }
  render() {
    return (
      <Container fluid className='footer-container'>
        <Row>
          <Col style={{width: '10%'}}></Col>
          <Col className='footer-col' style={{width: '80%'}}>footer space</Col>
          <Col style={{width: '10%'}}>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Appfooter
