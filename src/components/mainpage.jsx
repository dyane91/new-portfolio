import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';

import { Home, About, Projects, Skills } from '../components';

export class Mainpage extends React.Component {
	render() {
		return (
			<Container fluid>
        <Navbar bg="transparent" expand="lg" className="h-25">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Scrollchor to="#home" className="nav-link text-uppercase da-nav-link">Home</Scrollchor>
              <Scrollchor to="#about" className="nav-link text-uppercase da-nav-link">About</Scrollchor>
              <Scrollchor to="#projects" className="nav-link text-uppercase da-nav-link">Projects</Scrollchor>
              <Scrollchor to="#skills" className="nav-link text-uppercase da-nav-link">Skills</Scrollchor>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
				<Home />
        <About />
        <Projects />
        <Skills />
			</Container>
		);
	}
}
