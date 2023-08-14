import logo from '../Assets/icons/lohotype/Frame.svg'
import Logotext from '../Assets/icons/lohotype/HYDRA.svg'
import Button from '../Helpers/buttons/button'
import React from 'react';
import { Element, scroller } from 'react-scroll';
import "./nav.css"

export function Nav() {
  function scrollToForm() {
    scroller.scrollTo('formSection', {
      duration: 1200,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }


  return (
    <nav>

      <div className='logotype_of_company'>
        <img src={logo} alt="logoicon" />
        <img src={Logotext} alt="logoictontext" />
      </div>

      <div className='navigation'>
        <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#technologies">TECHNOLOGIES</a></li>
          <li><a href="#learn">HOW TO</a></li>
        </ul>
      </div>

      <div className='navigation_buttons'>
        <Button text='CONTACT US' className='contact-button' onClick={scrollToForm} />
        <Button text='JOIN HYDRA' className='main-button' onClick={scrollToForm} />
      </div>
    </nav>
  )
}
export default Nav