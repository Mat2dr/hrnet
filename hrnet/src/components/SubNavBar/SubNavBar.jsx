import React from 'react'
import "./SubNavBar.css";

import { Link } from 'react-router-dom';

/**
 * @name SubNavBar
 * @description A component for the SubNavBar
 * @return {JSX.Element}} 
 */
const SubNavBar = () => {
  return (
    <div id='SubNavBar'>
      <div className="container">
        <div className='SubNavBar-links'>
          <ul>
            <CustomLink to='/ListEmployees'>View Current Employees</CustomLink>
            <CustomLink to='/NewEmployee'>Create employees</CustomLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

function CustomLink({ to, children, ...props}) {
  const path = window.location.pathname;

  return (
    <li>
      <Link className={path === to ? "selected" : ""} to={to} {...props}>{children}</Link>
    </li>
  )
}


export default SubNavBar