import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';


import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';


class Header extends React.Component {


  
  render() {
    // let renderHeaders;
    // if (<LoginButton/>) {
    //   renderHeaders =<LogoutButton />

    // }else {
    //   renderHeaders = <LoginButton />
    // }
    // console.log(renderHeaders);
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        <LoginButton />
        <LogoutButton />

      </Navbar>
    );
  }
}

export default Header;
