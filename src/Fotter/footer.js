import footerlogo from '../Assets/icons/lohotype/logofooter.svg'
import footerBorder from '../Assets/icons/Vector 20.svg'
import fbicon from '../Assets/icons/footer_social_contact_icons/facebook.png'
import igicon from '../Assets/icons/footer_social_contact_icons/instagram.png'
import linkedinicon from '../Assets/icons/footer_social_contact_icons/linkedin.png'
import pinteresticon from '../Assets/icons/footer_social_contact_icons/pinterest.png'
import twittericon from '../Assets/icons/footer_social_contact_icons/twitter.png'
import youtubeicon from '../Assets/icons/footer_social_contact_icons/youtube.png'
import footerbottomvector from '../Assets/icons/footer_social_contact_icons/Vector 17.png'

import './footer.css'
import React from 'react';
import Button from '../Helpers/buttons/button'

export function footer() {
  
  return (
    <footer>
      <div className='footer_content'>
        <div className='footerlogo'>
          <img src={footerlogo} alt="logotype" />
          <img src={footerBorder} alt="" className='footer_border' />
        </div>

        <div className='footer_navigation'>
          <ul>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">TECHNOLOGIES</a></li>
            <li><a href="#">HOW TO</a></li>
            <li><a href="#">JOYN HYDRA</a></li>
          </ul>
          <img src={footerBorder} alt="" className='footer_border' />
        </div>

        <div className='sitemap'>
          <ul>
            <li><a href="#">F.A.Q</a></li>
            <li><a href="#">SITEMAP</a></li>
            <li><a href="#">CONDITIONS</a></li>
            <li><a href="#">LICENSES</a></li>
          </ul>
          <img src={footerBorder} alt="" className='footer_border' />
        </div>

        <div className='social_contacts'>
          <span>SOCIALIZE WITH HYDRA</span>
          <div>
            <img src={fbicon} alt="icon" />
            <img src={twittericon} alt="icon" />
            <img src={linkedinicon} alt="icon" />
            <img src={youtubeicon} alt="icon" />
            <img src={igicon} alt="icon" />
            <img src={pinteresticon} alt="icon" />
          </div>
          <Button
          
            text={"BUILD YOUR WORLD"}
            className={'main-button'}
          />
        </div>
      </div>
      <img src={footerbottomvector} alt="" className='footerbottomborder' />
      <span>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </span>
    </footer>
  )
}