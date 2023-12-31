import joinvector from '../Assets/vectors/join.png'
import React from 'react';
import './join.css'


export function joinForm() {
  return (
    <form name='formSection' id='join'>
      <div className="join_form_title">
        <h4 className='bol_dtext_title'>JOIN HYDRA</h4>
        <img src={joinvector} alt="vector" />
        <h5 className='thin_text_subtitle'>Let’s Build Your VR Experience</h5>
      </div>

      <div className="users_first_last_name">
        <input type="text" name="" placeholder='First Name' />
        <input type="text" name="" placeholder='Last Name' />
      </div>

      <div className="users_contact">
        <input type="text" name="" placeholder='Email' />
        <input type="text" name="" placeholder='Phone Number' />
      </div>
      <input type="text" name="subject" placeholder='Subject' className='subject_input' />
      <textarea placeholder='textarea'></textarea>
    </form>
  )
}