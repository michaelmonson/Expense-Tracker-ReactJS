import React from 'react';
import './Header.css';
import headerImg from '../assets/expense_img.png';

function Header() {
   return (
      <div className="header-bar">
         <img src={headerImg} width="100" alt="Expense Tracker" />         
         <div>Expense Tracker</div>
      </div>
   );
}

export default Header;
