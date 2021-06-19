import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function Navigation(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Home</Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/Dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Login">Login In</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

// Navigation.propTypes = {
//   activePage: propTypes.string.isRequired,
//   onPageChange: propTypes.func.isRequired,
// };

export default Navigation;
