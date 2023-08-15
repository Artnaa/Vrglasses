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
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#technologies">TECHNOLOGIES</a></li>
            <li><a href="#learn">HOW TO</a></li>
            <li><a href="#join">JOYN HYDRA</a></li>
          </ul>
          <img src={footerBorder} alt="" className='footer_border' />
        </div>

        <div className='sitemap'>
          <ul>
            <li><a href="#about">F.A.Q</a></li>
            <li><a href="#services">SITEMAP</a></li>
            <li><a href="#">CONDITIONS</a></li>
            <li><a href="#">LICENSES</a></li>
          </ul>
          <img src={footerBorder} alt="" className='footer_border' />
        </div>

        <div className='social_contacts'>
          <span>SOCIALIZE WITH HYDRA</span>
          <div>
            <a href="https://fb.me" target="_blank" rel="noopener noreferrer">
              <img src={fbicon} alt="Facebook icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twittericon} alt="Twitter icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinicon} alt="LinkedIn icon" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={youtubeicon} alt="YouTube icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={igicon} alt="Instagram icon" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <img src={pinteresticon} alt="Pinterest icon" />
            </a>
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