import React from 'react';
import s from './SideBar.module.css';
import logo from '../../image/Logo.png';

const SideBar = () => {
  return (
    <div className={s.sidebar_container}>
      <div className={s.sidebar_info}>
        <div className={s.sidebar_logo_section}>
          <img className={s.sidebar_logo_img} src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
