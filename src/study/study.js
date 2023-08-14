import card1photo from '../Assets/Images/cards/pexels-shvets-production-7561969 1.png'
import card2photo from '../Assets/Images/cards/pexels-mikhail-nilov-7887140 1.png'
import card3photo from '../Assets/Images/cards/pexels-rodnae-productions-8098263 1.png'
import card4photo from '../Assets/Images/cards/pexels-mali-maeder-756439 1.png'
import Button from '../Helpers/buttons/button';
import "./study.css"


export function study() {
  return (
    <div className="vr_study_cards" id='services'>
      <div className="vr_study_card">
        <img src={card1photo} alt="" />
        <h3>SIMULATION</h3>
        <span>Vitae sapien pellentesque habitant morbi
          nunc. Viverra aliquet  porttitor rhoncus
          libero justo laoreet sit amet vitae.
        </span>
        <Button text='TRY IT NOW' className='main-button' />
      </div>

      <div className="vr_study_card">
        <img src={card2photo} alt="" />
        <h3>EDUCATION</h3>
        <span>Vitae sapien pellentesque habitant morbi
          nunc. Viverra aliquet  porttitor rhoncus
          libero justo laoreet sit amet vitae.
        </span>
        <Button text='TRY IT NOW' className='main-button' />
      </div>

      <div className="vr_study_card">
        <img src={card3photo} alt="" />
        <h3>SELF-CARE</h3>
        <span>Vitae sapien pellentesque habitant morbi
          nunc. Viverra aliquet  porttitor rhoncus
          libero justo laoreet sit amet vitae.
        </span>
        <Button text='TRY IT NOW' className='main-button' />
      </div>

      <div className="vr_study_card">
        <img src={card4photo} alt="" />
        <h3>OUTDOOR</h3>
        <span>Vitae sapien pellentesque habitant morbi
          nunc. Viverra aliquet  porttitor rhoncus
          libero justo laoreet sit amet vitae.
        </span>
        <Button text='TRY IT NOW' className='main-button' />
      </div>
    </div>
  )
}