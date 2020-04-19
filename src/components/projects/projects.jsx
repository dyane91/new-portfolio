import React, { Component } from 'react';
import { Row, Col, Card }  from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './projects.css';

export class Projects extends Component {
  render() {
    return (
      <Row className="bg-light py-5">
        <Col xs={12}>
          <p className="h2">Projects</p>
          <p>Look at some projects I've been working on!</p>
        </Col>

        <Col xs={12} sm={8} md={10} lg={12} className="mx-auto">
          <VerticalTimeline>
            <VerticalTimelineElement
              className=""
              contentStyle={{ background: 'rgb(33, 150, 243)' }}
              textClassName="p-2"
              iconClassName="circle-timeline"
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
              <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={['fas', 'seedling']} size="3x" color="white" />
                </div>
                <Card className="w-75">
                  <Card.Body>
                    <Card.Title>Leaves</Card.Title>
                    <Card.Text>Mobile Application* that helps you take care of your plants</Card.Text>
                    <Card.Link href="https://leaves-website-ec187.web.app/">VISIT SITE</Card.Link>
                    <Card.Text className="blockquote-footer">In Beta for iOS</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className=""
              contentStyle={{ background: 'rgb(33, 150, 243)' }}
              textClassName="p-2"
              iconClassName="circle-timeline"
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
              <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={['fas', 'gamepad']} size="3x" color="white" />
                </div>
                <Card className="w-sm-75 w-xs-100">
                  <Card.Body>
                    <Card.Title>Vim-City</Card.Title>
                    <Card.Text>Web App game that teach you VIM commands</Card.Text>
                    <Card.Link href="http://vim-city.herokuapp.com/">VISIT SITE</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className=""
              contentStyle={{ background: 'rgb(33, 150, 243)' }}
              textClassName="p-2"
              iconClassName="circle-timeline"
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
              <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={['fas', 'seedling']} size="3x" color="white" />
                </div>
                <Card className="w-sm-75 w-xs-100">
                  <Card.Body>
                    <Card.Title>PlantApp</Card.Title>
                    <Card.Text>WebApp that identifies plants using IBM Watson</Card.Text>
                    <Card.Link href="https://plantapp-7f7fe.firebaseapp.com/#/">VISIT SITE</Card.Link>
                  </Card.Body>
                </Card>
              </div>
           </VerticalTimelineElement>

           <VerticalTimelineElement
              className=""
              contentStyle={{ background: 'rgb(33, 150, 243)' }}
              textClassName="p-2"
              iconClassName="circle-timeline"
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
              <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={['fas', 'cart-arrow-down']} size="3x" color="white" />
                </div>
                <Card className="w-sm-75 w-xs-100">
                  <Card.Body>
                    <Card.Title>Grace Shopper</Card.Title>
                    <Card.Text>Dreams shopper e-commomerce website</Card.Text>
                    <Card.Link href="http://graceshopper-bluebarracudas.herokuapp.com/">VISIT SITE</Card.Link>
                  </Card.Body>
                </Card>
              </div>
           </VerticalTimelineElement>
          </VerticalTimeline>
        </Col>
      </Row>
    );
  }
}
