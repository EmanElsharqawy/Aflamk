import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="custom_color text-white text-center py-2 mt-5 pt-2">
      <Container>
            <Nav className=" d-flex justify-content-center  custom_footer_nav  ">
              <Nav.Item className=' my-nav-link'>
                <Nav.Link href="#action1"  className="text-white-50 px-2">About us</Nav.Link>
              </Nav.Item>
              <Nav.Item className=' my-nav-link'>
                <Nav.Link href="#action1"  className="text-white-50 px-2">Contact us</Nav.Link>
              </Nav.Item>
              <Nav.Item className=' my-nav-link'>
                <Nav.Link href="#action1"  className="text-white-50 px-2">privacy</Nav.Link>
              </Nav.Item>
            </Nav>
            <p className="home-title text-white-50 py-0 ">Copyright © 2024 - All right reserved by <span className='text-info'>Eman EL-sharqawy</span></p>
      </Container>
    </footer>
  );
};

export default Footer;


