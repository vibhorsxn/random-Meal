import React from 'react';
import {Navbar,Container} from 'react-bootstrap';

function navbar  ()  {

    return (

        <div>
            <Navbar bg="light" variant="red" >
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
          width="120"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      
      </Navbar.Brand>
    </Container>
  </Navbar>
        </div>
    )
}

export default navbar
