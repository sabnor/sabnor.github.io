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


import SN from './SN-icon.png';
// import Thumbnail from './Thumbnail.js';




class About extends Component {
    
      createGrid(amount) {
        let grid=[]
        for (let j = 0; j < amount; j++) {
        grid.push(<Image id="SN" src={SN}/>)
    }
    return (
        grid
    )
    }
    render() {

        var createGrid = this.createGrid();
      return (
            <div>
            •‿•)
            ( •‿•)>⌐■-■
            (⌐■‿■)
            </div>

    );
}
}

export default About;