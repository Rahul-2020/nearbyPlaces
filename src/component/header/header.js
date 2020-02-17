import React from 'react';
import logo from '../../images/logo.svg'

const Header = (props) => {
  return (
    <div data-test="header" className="header">
      <header className="app-header">
        <div>
          <img data-test="header-logo" src={logo} className="app-logo" alt="logo" />
        </div>
        <div>
          Find nearby places!
        </div>
      </header>
    </div>
  );

}

export default Header;
