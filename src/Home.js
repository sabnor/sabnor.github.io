import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Image from 'react-bootstrap/Image';
// import Carousel from 'react-bootstrap/Carousel';
// import logo from './portfolio-icon.png';
// import AR from './osqledARen.png';
import './portfolio.css';
// import LinkContainer from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';


import SN from './SN-icon.png';
// import Thumbnail from './Thumbnail.js';




class Home extends Component {
    constructor() {
        super();
        this.state = {
          randomitem : null
        }
      }
      items() {
        let array=["interactive","cool","super"]
     
        var randomitem = array[Math.floor(Math.random() * array.length)];
        
    
    return (
        randomitem
    )
    }
      componentDidMount() {
        setInterval( () => {
          this.setState({
            curTime : this.items()
          })
        },1000)
      }

      createGrid(amount) {
        let grid=[]
        for (let j = 0; j < amount; j++) {
        grid.push(<svg width="150" height="150">
        <rect id="SN" x="50" y="20" width="150" height="150" color="red" />
      </svg>)
    }
    return (
        grid
    )
}
    

     
    

    render() {

        var createGrid = this.createGrid();
        var randomitem = this.items();
      return (
            
            <div className="landing">
                <div className="start-title">I am {randomitem}<div>
        
          </div></div>
                 {this.createGrid(32)}
                 {/* <div className="parallax"></div>  */}
{/*             
            <div id="pot" className="wrap">
            <div className="l">L</div>
            <div className="o">O</div>
            <div className="a">A</div>
            <div className="d">D</div>
            <div className="i">I</div>
            <div className="n">N</div>
            <div className="g">G</div>
          </div> */}
          </div>

    );
}
}

export default Home;