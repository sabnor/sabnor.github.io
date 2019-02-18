
import React, { Component } from 'react';
import {Image,Row,Col} from 'react-bootstrap';
import AR from './osqledARen.png';

class ProjectDetails extends Component {
    


  render() {


    return (
          
          <div className="details">
           <nav>
                <a href="#OsqledARen">First</a>
                <a href="#2">Second</a>
                <a href="#3">Third</a>
            </nav>

            <div className="project-menu">
                <div className="square-item">
                    First
                </div>
                <div className="square-item">
                    Second
                </div>
                <div className="square-item">
                    Third
                </div>

            </div>

            <div className="scrolling-box">
                <section id='OsqledARen'>
                <div>
                <div className="bold-text">This is the first section</div>
                This is the first sectionThis is the first sectionThis is the first sectionThis is the first sectionThis is the first sectionThis is the first sectionThis is the first section
                </div>
                <Image id="AR" src={AR}/>
                
                
                </section>
                <section id="2">
                <Image id="AR" src={AR}/>
                This is the second section</section>
                <section id="3">
                This is the third section
                <Image id="AR" src={AR}/>
                </section>
            </div>
        </div>

  );
}
}

export default ProjectDetails;