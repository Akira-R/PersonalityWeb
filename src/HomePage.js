import React, { useEffect } from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import hp1 from './image/hp1.jpg';
import hp2 from './image/hp2.jpeg';
import hp3 from './image/hp3.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import glovalVars from './globalVar';

import './App.css';
import { Link } from 'react-router-dom';

function HomePage(prop) {

  function toLogin(){
    navigate ('/login')
}

const navigate = useNavigate()

  return (
    <Container className="w-100 mw-100">
      <Row className="justify-content-center">
        <Col className="text-center">
          <Carousel >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={hp1}
                alt="Unlock your potential with our courses"
              />
              <Carousel.Caption>
                <h5>Which personality are you?</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={hp2}
                alt="Transform your future with education"
              />
              <Carousel.Caption>
                <h5>Get result in short time</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={hp3}
                alt="Upgrade your skills"
              />
              <Carousel.Caption>
                <h5>Unlock your potential with our courses</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="justify-content-center pt-2">
      <Row>
        {/* <Col className="text-center"><Link className="myLink" to="/courses"> Click here to start. </Link></Col> */}
      </Row>
      </Row>
      <Row className="mb-3 w-100 mw-100">
        <Button variant="primary" onClick={toLogin}>Click here to start </Button>
      </Row>
      
      <Row className="pt-4 me-5">
        <Col className="text-center">Contact</Col>
        <Col className="text-center">Testimonials</Col>
        <Col className="text-center">Terms & Conditions</Col>
        <Col className="text-center">Privacy Policy</Col>
        <Col className="text-center">For Teams</Col>
        <Col className="text-center">JoinUs!</Col>
      </Row>

      <Row className="pt-4"></Row>
      
    </Container>
  );
}

export default HomePage;
