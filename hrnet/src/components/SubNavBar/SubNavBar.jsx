import React from 'react'
import "./SubNavBar.css";

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div id='SubNavBar'>
      <div className="container">
        <div className='SubNavBar-links'>
          <ul>
            <li><Link to='/ListEmployees'>View Current Employees</Link></li>
            <li><Link to='/NewEmployee' className='selected'>Create employees</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar