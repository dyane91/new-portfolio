import React, { Component } from 'react';
import { Row, Col, Badge }  from 'react-bootstrap';

import './skills.css';

export class Skills extends Component {
  render() {
    return (
      <Row className="bg-white py-5">
        <Col className="d-flex flex-column flex-lg-row">
          <div className="w-100 w-md-50 d-flex flex-wrap flex-row justify-content-between align-items-center">
            <div className="w-100">
              <p className="h2 mb-4">Proficient skills</p>
            </div>

            <div className="w-75 mx-auto d-flex flex-wrap justify-content-lg-center">
              <Badge pill className="da-badge-color py-3 px-4 px-md-5 m-2">Javascript</Badge>
              <Badge pill className="da-badge-color p-3 px-4 px-md-5 m-2">HTML</Badge>
              <Badge pill className="da-badge-color p-3 px-4 px-md-5 m-2">CSS</Badge>
              <Badge pill className="da-badge-color p-3 px-4 px-md-5 m-2">React</Badge>
              <Badge pill className="da-badge-color p-3 px-4 px-md-5 m-2">React Native</Badge>
              <Badge pill className="da-badge-color p-3 px-4 px-md-5 m-2">Redux</Badge>   
              <Badge pill className="da-badge-color p-3 px-4 px-md-5 m-2">Express</Badge>
              <Badge pill className="da-badge-color py-3 px-4 px-md-5 m-2">Node.js</Badge>
              <Badge pill className="da-badge-color p-3 px-4 px-md-5 m-2">Bootstrap</Badge>
              <Badge pill className="da-badge-color p-3 px-4 px-md-5 m-2">GitHub</Badge>
            </div>
          </div>

          <div className="w-100 w-md-50 mt-5 mt-lg-0">
            <div className="w-100">
              <p className="h2 mb-4">Familiar skills</p>
              <div className="w-75 mx-auto d-flex flex-wrap justify-content-lg-center">
                <Badge pill className="da-badge-color py-3 px-4 px-md-5 m-2">Firebase</Badge>
                <Badge pill className="da-badge-color py-3 px-4 px-md-5 m-2">Typescript</Badge>
                <Badge pill className="da-badge-color p-3 px-4 px-md-5 m-2">Docker</Badge>
                <Badge pill className="da-badge-color p-3 px-4 px-md-5 m-2">Kubernetes</Badge>
                <Badge pill className="da-badge-color py-3 px-4 px-md-5 m-2">Nativescript</Badge>
                <Badge pill className="da-badge-color py-3 px-4 px-md-5 m-2">Semiotic</Badge>
                <Badge pill className="da-badge-color py-3 px-4 px-md-5 m-2">Sequelize</Badge>
                <Badge pill className="da-badge-color p-3 px-4 px-md-5 m-2">PostgreSQL</Badge>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
