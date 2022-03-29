import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../header/header.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../home/Home';
import About from '../about/About';
import Contactus from '../contactus/Contactus';
export class Appheader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first: []
    }
  }
  render() {
    return (
      <Container fluid className='header-container'>
        <Row>
          <Col style={{ width: '10%' }}>con-ui</Col>
          <Col style={{ width: '70%' }}></Col>
          <Col style={{ width: '20%', textAlign: 'end', paddingRight: '10px' }}>
            {this.props.children}
          
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Appheader
