import { FaTelegramPlane, FaInstagram} from "react-icons/fa";
import React from 'react';
function Nav(){
    /* Работа с прокруткой */
    window.addEventListener('scroll', () => {
        let scrolling = document.documentElement.scrollTop;
        if (scrolling > 0){
            document.querySelector('.nav').style.height = 50 + 'px';
            document.querySelector('.up_menu').style.height = 50 + 'px';
            document.querySelector('.burger-menu-links').style.top = 50 + 'px';
            document.querySelector('.burger-menu-links').style.height = 'calc(100vh - 50px)';
        }else{
            
            document.querySelector('.nav').style.height = 80 + 'px';
            document.querySelector('.up_menu').style.height = 80 + 'px';
            document.querySelector('.burger-menu-links').style.top = 80 + 'px';
            document.querySelector('.burger-menu-links').style.height = 'calc(100vh - 80px)';
        }
    });
    /* Бургер меню */
    function openBurger(){
        document.querySelector('.burger-menu-links').classList.toggle('burger-menu-links-open');
        document.querySelector('.line1').classList.toggle('b-m-l-1');
        document.querySelector('.line2').classList.toggle('b-m-l-2');
        document.querySelector('.line3').classList.toggle('b-m-l-3');
    }
    /* JSX */
    return(
       <div className="nav">
           <div className="wrapper">
               <div className="up_menu">
                    <div className="burger-menu-lins" onClick={openBurger}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <div className="logo">Pax <span className="tin">Template</span></div>
                    <ul className="top_menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                        <li className="social">
                            <a href="#"><FaTelegramPlane /></a>
                            <a href="#"><FaInstagram /></a>
                        </li>
                    </ul>
               </div>
           </div>

           <ul className="burger-menu-links">
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Our Team</a></li>
               <li><a href="#">Portfolio</a></li>
               <li><a href="#">Contact</a></li>
               <li>
                   <a href="#"><FaTelegramPlane /></a>
                   <a href="#"><FaInstagram /></a>
               </li>
           </ul>
       </div>
   ); 
}

export default Nav;