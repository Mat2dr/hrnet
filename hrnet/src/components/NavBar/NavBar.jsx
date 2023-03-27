import React from 'react'
import logo from '../../utils/img/logo.png';
import "./NavBar.css";

import { Link } from 'react-router-dom';

/**
 * @name NavBar
 * @description A component for the Nav Bar
 * @return {JSX.Element}} 
 */
const NavBar = () => {

  return (
    <div id='NavBar'>
      <div className="container">
        <div className='NavBar-links'>
          <Link to='/'>
            <img src={logo} alt="logo HRnet" />
          </Link>
          <ul>
            <li><Link to='/NewEmployee' className='selected'>Employees</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}



export default NavBar