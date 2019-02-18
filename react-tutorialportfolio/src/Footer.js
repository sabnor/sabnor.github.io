import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Footer extends Component {
     

    render() {
      return (
        <footer>
          <Row>
            <Col>
              <div className="text-center">
                <h4 className="bold-text">Kontakt</h4>
                <p>Telephone: +460707263169</p>
              </div>
            </Col>
        </Row>
       </footer>

           );
}
}

export default Footer;