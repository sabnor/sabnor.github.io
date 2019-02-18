import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LinkContainer from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';


class Thumbnail extends Component {
     

    render() {


      return (
          <div>
          <Nav.Link href="ProjectDetails">
                <Image className="thumbnail img-fluid" alt="Responsive image" src={this.props.imgsrc} roundedCircle />
            </Nav.Link>

             </div>
    );
}
}

export default Thumbnail;