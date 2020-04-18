import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col }  from 'react-bootstrap';

import './home.css';
export class Home extends Component {
	render() {
		return (
      <Row className="da-home d-flex flex-row justify-content-center align-items-center">
        <Col xs={12} sm={11}>
          <div>
            <Animated animationIn="zoomInUp" isVisible={true} className="d-flex justify-content-center">
              <div className="da-name w-md-25 p-4">
                <p className="text-center">DYANE</p>
                <p className="text-center">AVALOS</p>
              </div>
            </Animated>
            <Animated animationIn="bounceInLeft" isVisible={true}>
              <div className="da-engineer p-3">
                <p className="text-center">SOFTWARE ENGINEER</p>
              </div>
            </Animated>
          </div>
        </Col>

        <Col xs={12} sm={1} className="mb-sm-5">
          <div className="d-flex flex-sm-column flex-xs-row justify-content-center align-items-center">
            <a href="https://github.com/dyane91" className="text-muted p-4" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} size="lg" color="white" />
            </a>

            <a href="https://www.linkedin.com/in/dyaneavalos/" target="_blank" rel="noopener noreferrer" className="text-muted p-4">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="lg" color="white" />
            </a>

            <a href="https://www.facebook.com/dyaneramos" target="_blank" rel="noopener noreferrer" className="text-muted p-4">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} size="lg" color="white" />
            </a>
          </div>
        </Col>
      </Row>
		);
	}
}
