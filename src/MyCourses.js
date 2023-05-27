
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

import typeA from './image/type_a.png';
import typeB from './image/type_b.png';
import typeC from './image/type_c.png';
import typeD from './image/type_d.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import glovalVars from './globalVar'
import './App.css';

function Profile(prop) {
  const {token} = prop

  const [myCourseArr, setMyCourseArr] = useState([]);
  const [recCourseArr, setRecCourseArr] = useState([]);
  const [username, setUsername] = useState("");
  const [ptype, setPtype] = useState('');

  function toTestButton(){
      navigate ('/testpage')
  }

  const navigate = useNavigate()

  useEffect(() => {
    if(token !== null){
      const bodyData = JSON.stringify({email:token.email})
      const headerInfo = {method:"POST",
                          body:bodyData,
                          headers:{'Content-Type':'application/json',
                          Authorization : 'Bearer ' + token.token,}
                        }
    const url = glovalVars.hostUrl + '/profile'
    fetch(url, headerInfo)
      .then(response => {return response.json() })
      .then(data => {
        console.log({data});
        setMyCourseArr([...data.result]);
        setUsername(data.result[0].username)
        setPtype(data.result[0].presult)
      })
      .catch(error => { console.log('There was an error!', error)})
    }

    if(token !== null){
      const bodyData = JSON.stringify({email:token.email})
      const headerInfo = {method:"POST",
                          body:bodyData,
                          headers:{'Content-Type':'application/json',
                          Authorization : 'Bearer ' + token.token,}
                        }
    const url = glovalVars.hostUrl + '/recommend'
    fetch(url, headerInfo)
        .then(response => {return response.json() })
        .then(data => {
          console.log({data});
          setRecCourseArr([...data.result])
        })
        .catch(error => { console.log('There was an error!', error)})
    }

  }, [token])

  return (
    <Container >
        <Row className="justify-content-center pt-2">
          
        {token && <Col className="text-center"> <h2> Hi, {username} </h2></Col>}
       </Row>
       <Row className="pt-4"></Row>
       <Row className="justify-content-center">
       {(ptype === 'A') && 
       <Col>
       <Row className="justify-content-center ">
       <div class="col-md-2">
        <img class="img-responsive" src={typeA} alt="typeA" />
        </div>
       </Row>
        <h3 className="text-center" >You have type A Pesonality</h3>
       </Col>
       }

        {(ptype === 'B') && 
       <Col>
       <Row className="justify-content-center ">
       <div class="col-md-2">
        <img class="img-responsive" src={typeB} alt="typeB" />
        </div>
       </Row>
        <h3 className="text-center" >You have type B Pesonality</h3>
       </Col>
       }

        {(ptype === 'C') && 
       <Col>
       <Row className="justify-content-center ">
       <div class="col-md-2">
        <img class="img-responsive" src={typeC} alt="typeC" />
        </div>
       </Row>
        <h3 className="text-center" >You have type C Pesonality</h3>
       </Col>
       }

        {(ptype === 'D') && 
       <Col>
       <Row className="justify-content-center ">
       <div class="col-md-2">
        <img class="img-responsive" src={typeD} alt="typeD" />
        </div>
       </Row>
        <h3 className="text-center" >You have type D Pesonality</h3>
       </Col>
       }

       {(ptype == null) &&
       <Col>
       <Row className="justify-content-center">
       <h3 className="text-center">Want to know what your personality is?</h3>
       </Row>

       <div class="col-md-12 text-center">
              <Button variant="primary" onClick={toTestButton}>
                  Take Test
                </Button>
          </div>
       </Col>
       }
       </Row>
       <Row className="pt-4"></Row>
       <Row className="justify-content-center pt-2">
       {token &&<Col className="text-center"> <h2> My Registered Courses </h2></Col>}
       </Row>
       {!token && <h3 className="text-center">Not login yet. Please login first.</h3>}
      <Row className="justify-content-center pt-2">
      {
          myCourseArr.map((item, index) => {
            return (
              <Col key={index} className="text-center" xs={12} md={6}>
                <Card className="my-2">
                  <Card.Header as = "h5">{item.cname}</Card.Header>
                  <Card.Body>
                    <Card.Text> {item.description} </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Row>
      
       <Row className="justify-content-center pt-2">
       {token && <Col className="text-center"> <h2> Recommend for you </h2></Col>}
       </Row>
      <Row className="justify-content-left pt-2">
      {
          recCourseArr.map((item, index) => {
            return (
              <Col key={index} className="text-center" xs={12} md={6}>
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
      
      <Row>
      {token && <Col className='text-end'><Link className="myLink" to="/courses"> See More Courses </Link></Col> }
      </Row>
      <Row className="pt-4"></Row>
    </Container>
  );
}

export default Profile;

