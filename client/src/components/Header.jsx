import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <div className='logo'>
          <h3 className='header-app-name'>Header</h3>
        </div>

        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/work'>Work</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header