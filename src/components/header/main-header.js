import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main-header.css';
import logoSvg from './images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
<div className='mother-container'>
    <div className='user-buttons'>
    <button className='button-1-style'>Login</button>
    <button className='button-2-style'>Register</button>
    </div>
    <div id="social-buttons" className='feed-buttons'>
    <button className='custom-buttons'>Latest Release</button>
    <button className='custom-buttons'>Following</button>
    <button className='custom-buttons'>Popular</button>
    </div>
    <div className='main-home'>
      <div className="input-wrapper">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          className="input-style"
          placeholder="Search"
        />
      </div>
      <div><img className='image-size' src={logoSvg} alt="Logo"/></div>
    </div>
</div>
    )
}

export default Header