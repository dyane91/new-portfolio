import React, { Component } from 'react';
import { Row, Col, Card }  from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.css';

export class Footer extends Component {
  render() {
    return (
      <Row id="da-footer" className="bg-light">
        <Col xs={12} className="d-flex justify-content-center align-items-center py-3">
          <Card className="border-0 bg-transparent">
            <Card.Text>©2022 Made by Dyane Avalos</Card.Text>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <a href="https://github.com/dyane91" className="p-3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'github']} size="lg" color="black" />
              </a>
              <a href="https://www.linkedin.com/in/dyaneavalos/" target="_blank" rel="noopener noreferrer" className="text-muted p-3">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="lg" color="black" />
              </a>

              <a href="https://www.facebook.com/dyaneramos" target="_blank" rel="noopener noreferrer" className="text-muted p-3">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} size="lg" color="black" />
              </a>
            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}
