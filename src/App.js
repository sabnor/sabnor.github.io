import React, { Component } from 'react';
// import './App.css';
// import './portfolio.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import BootstrapNavbar from './Navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home.js';
import InteractionDesign from './InteractionDesign.js';
import GraphicDesign from './GraphicDesign.js';
import './portfolio.css';
import Image from 'react-bootstrap/Image';
import Footer from './Footer.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SN from './SN-logo.png';
import Nav from 'react-bootstrap/Nav';
import ProjectDetails from './ProjectDetails';


class App extends Component {
  render() {
    return (
      <div className="App main-container">
        <Row className="navbar">
          <Col className="logo"><Nav.Link href="/"><Image id="navbar-logo" src={SN}/></Nav.Link></Col>
          <Col> 
            <Nav.Link href="interactiondesign" className="menu-item">/   Interaction Design</Nav.Link>
          </Col>
          <Col> 
            <Nav.Link href="graphicdesign" className="menu-item">/  Graphic Design</Nav.Link>
          </Col>          
          <Col> 
            <Nav.Link href="about" className="menu-item">/  About</Nav.Link>
          </Col>
        </Row>

        {/* <BootstrapNavbar/> */}
        <Footer fluid/>
        <Router>
          <div>
        <Route exact path="/" component={Home} />
        <Route path="/interactiondesign" component={InteractionDesign} />
        <Route path="/graphicdesign" component={GraphicDesign} />
        <Route path={"/projectdetails"} component={ProjectDetails} />
        {/* <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} /> */}
        </div>
        </Router>

       
      </div>
    );
  }
}

export default App;
