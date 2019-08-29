import React from 'react';

import style from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <img
        src="/assets/images/logo.png"
        alt="Apex Logo"
        className={style.logo}
      />
    </header>
  );
};

export default Header;
