import React, { Component } from 'react';
import { Row, Col }  from 'react-bootstrap';

import dyane from '../../images/me.jpg';
import './about.css';

export class About extends Component {
  render() {
    return (
      <Row className="bg-white">
        <Col xs={12} sm={6}>
          <div className="da-photo d-flex justify-content-center align-items-center my-5">
            <img src={dyane} alt="Dyane" className="img-fluid da-photo"/>
          </div>
        </Col>

        <Col xs={11} sm={4} className="d-flex flex-column justify-content-center align-items-center mt-2 mb-5 mx-auto">
          <p className="h2">
            Hello! A Bit About Me
          </p>
          <p className="text-justify">I'm a software engineer with lots of curiosity and excitement to learn
            and improve my technical skills to create products that could be used by people all across the globe.
            I consider myself proficient in independent work as well as in team work.
            I'm looking forward to using my aptitude for problem-solving alongside my newly developed
            technical skills in a company that pushes the boundaries of software engineering.</p>
        </Col>
      </Row>
    );
  }
}
