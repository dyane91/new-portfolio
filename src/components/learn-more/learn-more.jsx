import React, { Component } from 'react';
import { Row, Col, Card }  from 'react-bootstrap';

import './learn-more.css';

export class LearnMore extends Component {
  render() {
    return (
      <Row id="da-learn-more">
        <Col xs={12} sm={6} className="d-none d-sm-flex justify-content-center align-items-center ">
          <Card className="bg-transparent border-0 text-white">
            <Card.Title>LEARN MORE</Card.Title>
            <Card.Text>Download my resume to learn more</Card.Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} className="d-sm-flex justify-content-center align-items-start align-items-sm-center d-none">
          <Card className="bg-transparent border-0">
            <Card.Body>
              <Card.Text>
                <a href="https://us-central1-portfolio-f144d.cloudfunctions.net/app/api/resume" className="btn btn-primary" rel="noopener noreferrer">DOWNLOAD</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} className="d-flex justify-content-center align-items-center d-sm-none">
          <Card className="bg-transparent border-0 text-white">
            <Card.Body>
              <Card.Title>LEARN MORE</Card.Title>
              <Card.Text>Download my resume to learn more</Card.Text>
              <a href="https://us-central1-portfolio-f144d.cloudfunctions.net/app/api/resume" className="btn btn-primary mt-4" rel="noopener noreferrer">DOWNLOAD</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
