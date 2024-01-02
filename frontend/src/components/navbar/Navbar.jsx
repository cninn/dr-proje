import React, { useState } from "react";
import "./Navbar.css";
import {Icon} from 'react-icons-kit';
import {ic_calendar_view_day} from 'react-icons-kit/md/ic_calendar_view_day';
import {ic_dangerous} from 'react-icons-kit/md/ic_dangerous';

export default function Navbar() {


  const [toggle,setToggle] = useState(false);

  const toggleHandler =()=>{
    setToggle(!toggle);
  }



  return (
    <div className="navbar">
      <img className="nav-img" src="assets/logodr.png" alt="..." />
  
      <div  className={`links ${!toggle ? 'toggle' : ''}`}>
        <ul  className="links">
          <li className="link"><a href="/">ANASAYFA</a></li>
          <li className="link"><a href="/books">TÜM KİTAPLAR</a></li>
          <li className="link"><a href="/add">YENİ KİTAP EKLE</a></li>
        </ul>
      </div>
      <div className="toggle-icon">
        {
          !toggle 
          ? <Icon className="icon" icon={ic_calendar_view_day} size={30} onClick={toggleHandler}/>
          :  <Icon className="icon" icon={ic_dangerous} size={30} onClick={toggleHandler}/>
        }
        
       
      </div>
    </div>
  );
}
