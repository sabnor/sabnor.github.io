import React, { Component } from 'react';
import {Alert,Button} from 'react-bootstrap';

class UnderConstruction extends Component {
    constructor(props) {
        super(props);
    
        this.state = { show: true };
      }
    
      render() {
        const handleHide = () => this.setState({ show: false });
        const handleShow = () => this.setState({ show: true });
        return (
          <>
          <div className="UnderConstruction">
            <Alert className="UnderConstruction" show={this.state.show} variant="light">
              <Alert.Heading>Well, hello there!</Alert.Heading>
              <p>
                This site is under construction, <br/>beware of some wierd unorganized chaos. 
              </p>
              {/* <hr /> */}
              {/* <div className="d-flex justify-content-end">
                <Button onClick={handleHide} variant="outline-primary">
                  Okay!
                </Button>
              </div> */}
            </Alert>
    
            {/* {!this.state.show && <Button onClick={handleShow}>Show Alert</Button>} */}
            </div>
          </>
        );
      }
    }
   
export default UnderConstruction;
