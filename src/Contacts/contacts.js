
import location_icon from '../Assets/icons/Location-Icon.svg'
import call_icon from '../Assets/icons/phone-call.svg'
import mail_icon from '../Assets/icons/mail.svg'
import "./contacts.css"


export function contacts() {
  return (
    <div className="contacts">
      <div className='contacts_card'>
        <img src={location_icon} alt="" />
        <div className='contacts_card_content'>
          <h2>Pay Us a Visit</h2>
          <span>Union St, Seattle, WA 98101, United States</span>
        </div>
      </div>

      <div className='contacts_card'>
        <img src={call_icon} alt="" />
        <div className='contacts_card_content'>
          <h2>Give Us a Call</h2>
          <span><a ></a> <a href="tel:11111010">(110) 1111-1010</a></span>
        </div>


      </div>
      <div className='contacts_card'>
        <img src={mail_icon} alt="" />
        <div  className='contacts_card_content'>
          <h2>Send Us a Message</h2>
          <span>Contact@HydraVTech.com</span>
        </div>
      </div>
    </div>
  )
}
