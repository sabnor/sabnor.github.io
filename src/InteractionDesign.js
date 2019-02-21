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

import desk from './desk.png';
import ol from './OL.png';
import Thumbnail from './Thumbnail.js';




class Home extends Component {
     

    render() {


      return (
          <div>

{/*      GAMMALT         
               <Container>
                <h2 className="heading text-bold">Projects</h2>
                    <Row>
                        <Col xs={6} md={4}>
                            <Thumbnail id="OsqledARen" imgsrc={ol}/>
                        </Col>
                        <Col xs={6} md={4}>
                            <Thumbnail imgsrc={AR}/>
                        </Col>
                        <Col xs={6} md={4}>
                            <Thumbnail imgsrc={ol}/>
                        </Col>
                        <Col xs={6} md={4}>
                            <Thumbnail imgsrc={AR}/>
                        </Col>
                    </Row>
                </Container>; */}

            <Row className="project-menu">
                <Col className="project-menu-item" href="#OsqledARen">First</Col>
                <Col className="project-menu-item" href="#2">Second</Col>
                <Col className="project-menu-item" href="#3">Third</Col>
            </Row>
            {/* <div className="parallax"></div> */}

            <div className="project-grid">
                <Image id="AR" src={AR}/>
                <Image id="AR" src={AR}/>
                <Image id="AR" src={AR}/>
                <Image id="AR" src={AR}/>
                <Image id="AR" src={AR}/>
                <Image id="AR" src={AR}/>
            </div>
   
          </div>
    );
}
}

export default Home;