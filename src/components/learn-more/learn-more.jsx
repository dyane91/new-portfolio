import React, { Component } from 'react';
import { Row, Col, Card }  from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './learn-more.css';

export class LearnMore extends Component {
  render() {
    return (
      <Row id="da-learn-more">
        <Col xs={12} sm={5} className="offset-1 d-none d-sm-flex justify-content-center align-items-center ">
          <Card className="bg-transparent border-0 text-white">
            <Card.Title>LEARN MORE</Card.Title>
            <Card.Text>Download my most recent resume to learn more about my projects and professional work.</Card.Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} className="d-sm-flex justify-content-center align-items-start align-items-sm-center d-none">
          <Card className="bg-transparent border-0">
            <Card.Body>
              <Card.Text>
                <a href="https://us-central1-portfolio-f144d.cloudfunctions.net/app/api/resume" className="btn btn-primary px-4 py-2" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fa', 'file-download']} spin/> &nbsp; DOWNLOAD
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} className="d-flex justify-content-center align-items-center d-sm-none">
          <Card className="bg-transparent border-0 text-white">
            <Card.Body>
              <Card.Title>LEARN MORE</Card.Title>
              <Card.Text className="p-2">Download my most recent resume to learn more about my projects and professional work.</Card.Text>
              <a href="https://us-central1-portfolio-f144d.cloudfunctions.net/app/api/resume" className="btn mt-4 da-download" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fa', 'file-download']} spin/> &nbsp; DOWNLOAD
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
