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
        <div className={s.sidebar_name_section}>
          <p className={s.sidebar_name}>
            Онлайн сервіс подання {'\n'} Декларацій
          </p>
        </div>
      </div>
      <ul className={s.sidebar_items}>
        <li className={s.sidebar_item}>Анкета</li>
        <li className={s.sidebar_item}>Перелік документів</li>
        <li className={s.sidebar_item}>Декларація</li>
      </ul>
    </div>
  );
};

export default SideBar;
