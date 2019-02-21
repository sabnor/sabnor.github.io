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
          <div className="project-grid">

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

            {/* <Row className="project-menu">
                <Col className="project-menu-item" href="#OsqledARen">First</Col>
                <Col className="project-menu-item" href="#2">Second</Col>
                <Col className="project-menu-item" href="#3">Third</Col>
            </Row> */}
            {/* <div className="parallax"></div> */}
            
            <Row >
                <Col>
                <Image className="portfolio-image" src={AR}/>
                <div className="portfolio-text"><h3>OsqledARen</h3><h5>Enhancing the <br/>magazine experience<br/> with Augmented Reality.</h5></div>
                </Col>
                <Col>
                <Image className="portfolio-image" src={"https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}/>
                <div className="portfolio-text"><h3>OsqledARen</h3><h5>Enhancing the <br/>magazine experience<br/> with Augmented Reality.</h5></div>
                </Col>
                <Col>
                <Image className="portfolio-image" src={"https://images.unsplash.com/photo-1540612597331-63c67ea382fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80"}/>
                <div className="portfolio-text"><h3>OsqledARen</h3><h5>Enhancing the <br/>magazine experience<br/> with Augmented Reality.</h5></div>
                </Col>
               
            </Row>
            <Row className="project-grid">
                <Col>
                <Image className="portfolio-image" src={"https://images.unsplash.com/photo-1534237886190-ced735ca4b73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}/>
                <div className="portfolio-text"><h3>OsqledARen</h3><h5>Enhancing the <br/>magazine experience<br/> with Augmented Reality.</h5></div>
                </Col>
                <Col>
                <Image className="portfolio-image" src={"https://images.unsplash.com/photo-1536552959998-fcb3133bbe3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIxMTIzfQ&auto=format&fit=crop&w=2514&q=80"}/>
                <div className="portfolio-text"><h3>OsqledARen</h3><h5>Enhancing the <br/>magazine experience<br/> with Augmented Reality.</h5></div>
                </Col>
                <Col className="portfolio-item">
                    <Image  className="portfolio-image" alt="Responsive image" src={"https://images.unsplash.com/photo-1535598745644-bc7913bb1a2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80"} />
                    <div className="portfolio-text"><h3>OsqledARen</h3><h5>Enhancing the <br/>magazine experience<br/> with Augmented Reality.</h5></div>
                </Col>
               
            </Row>
   
   
          </div>
    );
}
}

export default Home;