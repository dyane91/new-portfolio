import React, { Component } from 'react';
import { Row, Col, Badge }  from 'react-bootstrap';

export class Skills extends Component {
  render() {
    return (
      <Row className="bg-white py-5">
        <Col className="d-flex flex-column flex-lg-row">
          <div className="w-100 w-md-50 d-flex flex-wrap flex-row justify-content-between align-items-center">
            <div className="w-100">
              <p className="h2 mb-4">PROFICIENT</p>
            </div>

            <div className="w-75 mx-auto d-flex flex-wrap">
              <Badge pill variant="primary" className="py-3 px-4 px-md-5 m-2">Javascript</Badge>
              <Badge pill variant="primary" className="p-3 px-4 px-md-5 m-2">HTML</Badge>
              <Badge pill variant="primary" className="p-3 px-4 px-md-5 m-2">CSS</Badge>
              <Badge pill variant="primary" className="p-3 px-4 px-md-5 m-2">React</Badge>
              <Badge pill variant="primary" className="p-3 px-4 px-md-5 m-2">Redux</Badge>
              <Badge pill variant="primary" className="py-3 px-4 px-md-5 m-2">Sequelize</Badge>
              <Badge pill variant="primary" className="p-3 px-4 px-md-5 m-2">postgreSQL</Badge>
              <Badge pill variant="primary" className="p-3 px-4 px-md-5 m-2">Express</Badge>
              <Badge pill variant="primary" className="py-3 px-4 px-md-5 m-2">Node.js</Badge>
              <Badge pill variant="primary" className="p-3 px-4 px-md-5 m-2">Bootstrap</Badge>
            </div>
          </div>

          <div className="w-100 w-md-50 mt-5 mt-lg-0">
            <div className="w-100">
              <p className="h2 mb-4">FAMILIAR</p>
              <div className="w-75 mx-auto d-flex flex-wrap justify-content-lg-center">
                <Badge pill variant="primary" className="py-3 px-4 px-md-5 m-2">Angular</Badge>
                <Badge pill variant="primary" className="p-3 px-4 px-md-5 m-2">Docker</Badge>
                <Badge pill variant="primary" className="p-3 px-4 px-md-5 m-2">Kubernetes</Badge>
                <Badge pill variant="primary" className="py-3 px-4 px-md-5 m-2">Nativescript</Badge>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
