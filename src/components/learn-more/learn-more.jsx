import React, { Component } from 'react';
import { Row, Col, Card, Button }  from 'react-bootstrap';

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
                <Button variant="primary">DOWNLOAD</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} className="d-flex justify-content-center align-items-center d-sm-none">
          <Card className="bg-transparent border-0 text-white">
            <Card.Body>
              <Card.Title>LEARN MORE</Card.Title>
              <Card.Text>Download my resume to learn more</Card.Text>
              <Button variant="primary" className="mt-3">DOWNLOAD</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
