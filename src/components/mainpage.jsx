import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';

import { Home, About, Projects, Skills, Footer, LearnMore } from '../components';

export class Mainpage extends React.Component {
	render() {
		return (
			<Container fluid>
        <Navbar bg="transparent" expand="lg" className="h-25">
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: 'white'}} className="navbar-dark"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Scrollchor to="#home" className="nav-link text-uppercase font-weight-bold">Home</Scrollchor>
              <Scrollchor to="#about" className="nav-link text-uppercase font-weight-bold">About</Scrollchor>
              <Scrollchor to="#projects" className="nav-link text-uppercase font-weight-bold">Projects</Scrollchor>
              <Scrollchor to="#skills" className="nav-link text-uppercase font-weight-bold">Skills</Scrollchor>
              <Scrollchor to="#learn-more" className="nav-link text-uppercase font-weight-bold">Learn More</Scrollchor>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="learn-more">
          <LearnMore />
        </div>
        <Footer />
			</Container>
		);
	}
}
