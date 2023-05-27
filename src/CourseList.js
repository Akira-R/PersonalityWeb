import React, { useEffect } from 'react';
import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import glovalVars from './globalVar';

import './App.css';

function CourseList(prop) {
  const [courseArr, setCourseArr] = useState([])


  useEffect(() => {
    const url = glovalVars.hostUrl + '/courseList'
    fetch(url)
      .then(response => {return response.json() })
      .then(data => {
        setCourseArr([...data.result]);
      })
      .catch(error => { console.log('There was an error!', error)})
    
  }, [])

  return (
    <Container className="w-100 mw-100">
       <Row className="justify-content-center pt-2">
       <Col className="text-center"> <h2> List of All Courses </h2></Col>
       </Row>     
      <Row className="justify-content-left pt-2">
      {
          courseArr.map(item => {
            return (
              <Col key={item.id} className="text-center" xs={12} md={6}>
                <Card className="my-2">
                  <Card.Header as = "h5">{item.name}</Card.Header>
                  <Card.Body>
                    <Card.Text> {item.description} </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  );
}

export default CourseList;