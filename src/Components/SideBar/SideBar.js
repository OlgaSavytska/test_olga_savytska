/* eslint-disable react/button-has-type */
import React from 'react';
import s from './SideBar.module.css';
import logo from '../../image/Logo.png';
import Declaration from '../Declaration/Declaration';

const SideBar = openDeclaration => {
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
        <li className={s.sidebar_item}>
          <button className={s.sidebar_item_button}>Анкета</button>
        </li>
        <li className={s.sidebar_item}>
          <button className={s.sidebar_item_button}>Перелік документів</button>
        </li>
        <li className={s.sidebar_item}>
          <button
            onClick={() => openDeclaration(Declaration)}
            type="button"
            className={s.sidebar_item_button}
          >
            Декларація
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
