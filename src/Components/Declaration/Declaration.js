/* eslint-disable react/button-has-type */
import React from 'react';
import s from './Declaration.module.css';

const Declaration = () => {
  return (
    <div className={s.decl_section}>
      <div className={s.decl_title}>
        <p className={s.decl_title_text}>Декларація</p>
      </div>
      <ul className={s.decl_items}>
        <li className={s.decl_item}>
          Виплати пов'язані з трудовими відносинами
        </li>
        <li className={s.decl_item}>Стипендії</li>
        <li className={s.decl_item_red}>Доходи від продажи/обміну майна</li>
        <li className={s.decl_item_white}>
          Підприємницькі доходи(припинення діяльності)
        </li>
        <li className={s.decl_item_white}>
          Дохід від незалежної професійної діяльності
        </li>
      </ul>
      <button className={s.decl_button}>Сформувати декларацію</button>
    </div>
  );
};

export default Declaration;
