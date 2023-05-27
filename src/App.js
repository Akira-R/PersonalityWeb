import { useState } from 'react';
import { Route, Routes,Link  } from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import HomePage from './HomePage';
import CourseList from './CourseList';
import Profile from './MyCourses';
import Login from './Login';
import TestPage from './TestPage';

import bearIcon from './image/bear.png';

function App(){
  const [content, setContent] = useState(-1);
  const [tokenData, setToken] = useState(null)
  function handleClick(contentId){
    setContent(contentId);
  }
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">
            <img
              alt=""
              src={bearIcon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           <Link className="myNavLink" to="/"> Personality Test </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav activeKey={content}>
            <Nav.Link as={Link} eventKey={0} to="/testpage"onClick={()=>handleClick(0)}>
              Take Test
            </Nav.Link>
            <Nav.Link as={Link} eventKey={1} to="/profile" onClick={()=>handleClick(1)}>
              Profile
            </Nav.Link>
            <Nav.Link as={Link} eventKey={2} to="/login" onClick={()=>handleClick(2)}>
              Login
            </Nav.Link>          
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CourseList />} />
       <Route path="/profile" element={<Profile token={tokenData}/>} />
       <Route path="/login" element={<Login token={tokenData} setTokenFn={setToken}/>} />
       <Route path="/testpage" element={<TestPage token={tokenData}/>} />
    </Routes>

    </>
  );

}

export default App;