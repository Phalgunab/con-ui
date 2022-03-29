import React, { Component } from 'react'
import Appheader from '../header/Appheader'
import Appfooter from '../footer/Appfooter'
import '../applayout/applayout.css'
import Home from '../home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from '../about/About'
import Contactus from '../contactus/Contactus'

const linkStyle = {
  margin: '0.3rem',
  textDecoration: 'none',
  color: 'white',
  fontSize: '0.8rem'
};

export class Applayout extends Component {
  render() {
    return (
      <div>
        
        <Router>
        <Appheader className='appheader'>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </Appheader>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contactus />
            </Route>
          </Switch>
        </Router>
        <Appfooter className='appfooter' />
      </div>

    )
  }
}

export default Applayout