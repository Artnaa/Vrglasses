
import location_icon from '../Assets/icons/Location-Icon.svg'
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
        <img src={location_icon} alt="" />
        <div className='contacts_card_content'>
          <h2>Pay Us a Visit</h2>
          <span>Union St, Seattle, WA 98101, United States</span>
        </div>


      </div>
      <div className='contacts_card'>
        <img src={location_icon} alt="" />
        <div  className='contacts_card_content'>
          <h2>Pay Us a Visit</h2>
          <span>Union St, Seattle, WA 98101, United States</span>
        </div>
      </div>
    </div>
  )
}
