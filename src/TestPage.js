import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

import glovalVars from './globalVar'
import Dot from './Dot';
import './App.css';

function TestPage(prop) {
    const {token} = prop

    const starterDots1 = [{ key: 0, set: 0, isSelect: false},
                          { key: 1, set: 0, isSelect: false},
                          { key: 2, set: 0, isSelect: false},
                          { key: 3, set: 0, isSelect: false}]
    const starterDots2 = [{ key: 0, set: 1, isSelect: false},
                          { key: 1, set: 1, isSelect: false},
                          { key: 2, set: 1, isSelect: false},
                          { key: 3, set: 1, isSelect: false}]
    const starterDots3 = [{ key: 0, set: 2, isSelect: false},
                          { key: 1, set: 2, isSelect: false},
                          { key: 2, set: 2, isSelect: false},
                          { key: 3, set: 2, isSelect: false}]
    const starterDots4 = [{ key: 0, set: 3, isSelect: false},
                          { key: 1, set: 3, isSelect: false},
                          { key: 2, set: 3, isSelect: false},
                          { key: 3, set: 3, isSelect: false}]
                        
  const [dots1, setDot1] = useState(starterDots1);
  const [dots2, setDot2] = useState(starterDots2);
  const [dots3, setDot3] = useState(starterDots3);
  const [dots4, setDot4] = useState(starterDots4);
  const [showAlert, setShowAlert] = useState(false);

  const [form, setForm] = useState({
    choice1: -1,
    choice2: -1,
    choice3: -1,
    choice4: -1
  });

  const navigate = useNavigate()

  function submitButton(e){
    e.preventDefault();
    if(form.choice1 < 0 || form.choice2 < 0 || form.choice3 < 0 || form.choice4 < 0){
      setShowAlert(true);
      return;
    }else{
      const bodyData = JSON.stringify({user:{email:token.email, choice1:form.choice1, choice2:form.choice2, choice3:form.choice3, choice4:form.choice4}})
      const headerInfo = {method:"POST",
                          body:bodyData,
                          headers:{'Content-Type':'application/json'}
                        }
      const url = glovalVars.hostUrl + '/testsubmit'
      fetch(url, headerInfo)
      .then(response => {
        console.log(response)
        return response.json() })
      .then(data => {
        console.log(data)
        navigate ('/profile')
      }).catch(error => { console.log('There was an error!', error)})
    }
  }

  function clickHandler(key, set) {
    // const newDots = [...dots1]
    // newDots.forEach(data => { data.isSelect = false; });
    // newDots[key].isSelect = true;
    // setDot1(newDots);

    const newDots1 = [...dots1];
    const newDots2 = [...dots2];
    const newDots3 = [...dots3];
    const newDots4 = [...dots4];

    if (set === 0) {
        newDots1.forEach(data => { data.isSelect = false; });
        newDots1[key].isSelect = true;
        setForm( {choice1: key, choice2: form.choice2, choice3: form.choice3, choice4: form.choice4} )
      } else if (set === 1) {
        newDots2.forEach(data => { data.isSelect = false; });
        newDots2[key].isSelect = true;
        setForm( {choice1: form.choice1, choice2: key, choice3: form.choice3, choice4: form.choice4} )
      } else if (set === 2) {
        newDots3.forEach(data => { data.isSelect = false; });
        newDots3[key].isSelect = true;
        setForm( {choice1: form.choice1, choice2: form.choice2, choice3: key, choice4: form.choice4} )
      } else if (set === 3) {
        newDots4.forEach(data => { data.isSelect = false; });
        newDots4[key].isSelect = true;
        setForm( {choice1: form.choice1, choice2: form.choice2, choice3: form.choice3, choice4: key} )
      }
      setDot1(newDots1);
      setDot2(newDots2);
      setDot3(newDots3);
      setDot4(newDots4);
  }

  // useEffect(() => {
  //   if(token !== null){
  //     const bodyData = JSON.stringify({email:token.email})
  //     const headerInfo = {method:"POST",
  //                         body:bodyData,
  //                         headers:{'Content-Type':'application/json',
  //                         Authorization : 'Bearer ' + token.token,}
  //                       }
  //   const url = glovalVars.hostUrl + '/testpage'
  //   fetch(url, headerInfo)
  //     .then(response => {
  //       console.log(response)
  //       return response.json() 
  //     })
  //     .catch(error => { console.log('There was an error!', error)})
  //   }
  // }, [token])

  return (
    <Container className="w-100 mw-100">
      <Row className="justify-content-center">
      {token && <Col className="text-center"><h2> Pick the choice that fit you the best </h2></Col>}
      </Row>
      <Row className="justify-content-center pt-3">
       </Row>
      {!token && <h3 className="text-center">Not login yet. Please login first.</h3>}
      <Row className="justify-content-center">
        <p></p>
      </Row>
      {token 
      && <Row className="justify-content-center">
        <h3 className="text-center" >Question 1</h3>
        {dots1.map(dot => { return <Col className="text-center" xs={12} md={1} key={dot.key} set={dot.set}><Dot dotData={dot} handlerFn={() => clickHandler(dot.key, dot.set)} /></Col>})}
        <p></p>
      </Row>} 
      {token 
      && <Row className="justify-content-center">
        <h3 className="text-center" >Question 2</h3>
        {dots2.map(dot => { return <Col className="text-center" xs={12} md={1} key={dot.key} set={dot.set}><Dot dotData={dot} handlerFn={() => clickHandler(dot.key, dot.set)} /></Col>})}
        <p></p>
      </Row>}
      {token 
      && <Row className="justify-content-center">
        <h3 className="text-center" >Question 3</h3>
      {dots3.map(dot => { return <Col className="text-center" xs={12} md={1} key={dot.key} set={dot.set}><Dot dotData={dot} handlerFn={() => clickHandler(dot.key, dot.set)} /></Col>})}
      <p></p>
    </Row>}
    {token 
        && <Row className="justify-content-center">
            <h3 className="text-center" >Question 4</h3>
        {dots4.map(dot => { return <Col className="text-center" xs={12} md={1} key={dot.key} set={dot.set}><Dot dotData={dot} handlerFn={() => clickHandler(dot.key, dot.set)} /></Col>})}
        <p></p>
      </Row>}

      {token 
        &&<Col className=" justify-content-center w-30" >
            <div class="col-md-12 text-center">
              <Button className="text-center" variant="primary" onClick={submitButton}>
                  Submit
              </Button>
          </div>
          {showAlert && <Alert variant={'danger'}> Pick all choices!!!</Alert>}
        </Col> }
        
    </Container>
  )
}

export default TestPage;