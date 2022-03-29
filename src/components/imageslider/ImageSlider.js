import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../imageslider/imageslider.css'
import SimpleImageSlider from "react-simple-image-slider";
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';

const images = [
  { url: image1 },
  { url: image2 },
  { url: image3 },
  { url: image1 },
  { url: image2 },
  { url: image3 }
];
var width = window.innerWidth;
window.onresize = () => {
  width = window.innerWidth;
};

export class ImageSlider extends Component {

  constructor(props) {
    super(props)

    this.state = {
      first: []
    }
  }
  
  render() {
    return (
      <Container className='imageslider-container' fluid>
        <Row className='imageslider-row'>
          <Col className='imageslider-col' style={{ width: '100%', height: '100%' }}>
            <SimpleImageSlider
              width={width}
              height='20rem'
              images={images}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
              loop={true}
              bgColor='#000000'
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ImageSlider