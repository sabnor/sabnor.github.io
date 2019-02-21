import React, { Component } from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import SN from './SN-logo.png';
class Footer extends Component {
     

    render() {
      return (
        <footer>
          <h4 className="text-center bold-text">Contact</h4>
          <div className="text-center">Sabina Nordell</div>
              <Row className="">
   
                <Col className="text-right">
                    Vasavägen 34<br/>
                    18278 Stocksund
                </Col>

                <Col>
             
                    sabnor@kth.se<br/>
                    +460707263169<br/>
                </Col>
              
           
              </Row>
            
       </footer>

           );
}
}

export default Footer;