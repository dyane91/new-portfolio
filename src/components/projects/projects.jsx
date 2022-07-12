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
        <Col xs={12} className="mb-3">
          <p className="h2">Projects</p>
          <p>Look at some projects I've been working on!</p>
        </Col>

        <Col xs={12} sm={8} md={10} lg={8} xl={12} className="mx-auto">
          <VerticalTimeline>
          <VerticalTimelineElement
              className=""
              contentStyle={{ background: 'rgb(33, 150, 243)' }}
              textClassName="p-2 d-flex align-items-center"
              iconClassName="circle-timeline"
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
              <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center">
                <div className="d-flex justify-content-center align-items-center p-2">
                  <FontAwesomeIcon icon={['fa', 'comments-dollar']} size="4x" color="white" />
                </div>
                <Card className="w-100">
                  <Card.Body>
                    <Card.Title className="font-weight-bolder">zDebt</Card.Title>
                    <Card.Text className="font-weight-light pb-2">This iOS app provides users with a detailed plan on how much to pay to each card/debt according to your end goal (strategy), as well as notifications for never missing a payment.</Card.Text>
                    <Card.Link href="https://testflight.apple.com/join/d3fNRFFx" className="font-weight-bold" target='_blank'>TRY BETA VERSION</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </VerticalTimelineElement>
          <VerticalTimelineElement
              className=""
              contentStyle={{ background: 'rgb(33, 150, 243)' }}
              textClassName="p-2 d-flex align-items-center"
              iconClassName="circle-timeline"
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
              <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center">
                <div className="d-flex justify-content-center align-items-center p-2">
                  <FontAwesomeIcon icon={['fa', 'virus']} size="4x" color="white" />
                </div>
                <Card className="w-100">
                  <Card.Body>
                    <Card.Title className="font-weight-bolder">Follow-covid19</Card.Title>
                    <Card.Text className="font-weight-light pb-2">Web application to see up-to-date global COVID-19 statistics or to filter them by preferred country.</Card.Text>
                    <Card.Link href="https://follow-covid19.info/" className="font-weight-bold" target='_blank'>VISIT SITE</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className=""
              contentStyle={{ background: 'rgb(33, 150, 243)' }}
              textClassName="p-2 d-flex align-items-center"
              iconClassName="circle-timeline"
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
              <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center">
                <div className="d-flex justify-content-center align-items-center p-2">
                  <FontAwesomeIcon icon={['fab', 'pagelines']} size="4x" color="white" />
                </div>
                <Card className="w-100">
                  <Card.Body>
                    <Card.Title className="font-weight-bolder">Leaves</Card.Title>
                    <Card.Text className="font-weight-light pb-2">Mobile Application* that helps you take care of your plants by giving basic care guide and watering notifications.</Card.Text>
                    <Card.Link href="https://leaves-website-ec187.web.app/" className="font-weight-bold" target='_blank'>VISIT SITE</Card.Link>
                    <Card.Text className="blockquote-footer">*In beta for iOS</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className=""
              contentStyle={{ background: 'rgb(33, 150, 243)' }}
              textClassName="p-2 d-flex align-items-center"
              iconClassName="circle-timeline"
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
              <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center">
                <div className="d-flex justify-content-center align-items-center p-2">
                  <FontAwesomeIcon icon={['fas', 'gamepad']} size="3x" color="white" />
                </div>
                <Card className="w-100">
                  <Card.Body>
                    <Card.Title className="font-weight-bolder">Vim-City</Card.Title>
                    <Card.Text className="font-weight-light pb-2">Interactive web game where players learn Vim commands by navigating through a top-down city while applying their knowledge in coding exercises.</Card.Text>
                    <Card.Link href="http://vim-city1.herokuapp.com/" className="font-weight-bold" target='_blank'>VISIT SITE</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className=""
              contentStyle={{ background: 'rgb(33, 150, 243)' }}
              textClassName="p-2 d-flex align-items-center"
              iconClassName="circle-timeline"
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
              <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center">
                <div className="d-flex justify-content-center align-items-center p-2">
                  <FontAwesomeIcon icon={['fas', 'seedling']} size="3x" color="white" />
                </div>
                <Card className="w-100">
                  <Card.Body>
                    <Card.Title className="font-weight-bolder">PlantApp</Card.Title>
                    <Card.Text className="font-weight-light pb-2">Web application that integrates machine learning to recognize plants based on the photo uploaded by the user.</Card.Text>
                    <Card.Link href="https://plantapp-7f7fe.firebaseapp.com/#/" className="font-weight-bold" target='_blank'>VISIT SITE</Card.Link>
                  </Card.Body>
                </Card>
              </div>
           </VerticalTimelineElement>

           <VerticalTimelineElement
              className=""
              contentStyle={{ background: 'rgb(33, 150, 243)' }}
              textClassName="p-2 d-flex align-items-center"
              iconClassName="circle-timeline"
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
              <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center">
                <div className="d-flex justify-content-center align-items-center p-2">
                  <FontAwesomeIcon icon={['fas', 'shopping-cart']} size="3x" color="white" />
                </div>
                <Card className="w-100 text-wrap">
                  <Card.Body>
                    <Card.Title className="font-weight-bolder">Grace Shopper</Card.Title>
                    <Card.Text className="font-weight-light pb-2">Fantasy e-commerce site that allows users to buy potions.</Card.Text>
                    <Card.Link href="https://grace-shopper1.herokuapp.com//" className="font-weight-bold" target='_blank'>VISIT SITE</Card.Link>
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
