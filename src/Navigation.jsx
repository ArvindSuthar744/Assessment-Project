import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <section className="navigation">
        <div className="nav">
          <div className="logo-section">
            <h2 id="logo">Emp Details</h2>
          </div>
          <ul className="nav-list">
            <li>
              <Link to="/" id='profile-btn' >Home</Link>
            </li>
            <li>
              <Link to="/admin" id='profile-btn'>Admin Panel</Link> 
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Navigation;
