import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import logo from './portfolio-icon.png';
import AR from './osqledARen.png';
import './portfolio.css';
import LinkContainer from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

import Thumbnail from './Thumbnail.js';

import ol from './OL.png';
import GP from './graphicdesign.png';
// import Thumbnail from './Thumbnail.js';




class Home extends Component {
     

    render() {


      return (
          <div>


               <Image src={GP} fluid />
               <Container>
               <h2 className="heading text-bold">Projects</h2>
                    <Row>
                        <Col xs={6} md={4}>
                            <Thumbnail imgsrc={ol}/>
                        </Col>
                        <Col xs={6} md={4}>
                            <Thumbnail imgsrc={AR}/>
                        </Col>
                        <Col xs={6} md={4}>
                            <Thumbnail imgsrc={ol}/>
                        </Col>
                    </Row>
                </Container>;

          </div>
    );
}
}

export default Home;