import logo from '../Assets/icons/lohotype/Frame.svg'
import Logotext from '../Assets/icons/lohotype/HYDRA.svg'
import Button from '../Helpers/buttons/button'
import "./nav.css"

export function Nav() {
  return (
    <nav>

      <div className='logotype_of_company'>
        <img src={logo} alt="logoicon" />
        <img src={Logotext} alt="logoictontext" />
      </div>

      <div className='navigation'>
        <ul>
          <li><a href="">ABOUT</a></li>
          <li><a href="">SERVICES</a></li>
          <li><a href="">TECHNOLOGIES</a></li>
          <li><a href="">HOW TO</a></li>
        </ul>
      </div>

      <div className='navigation_buttons'>
        <Button text='CONTACT US' className='contact-button' />
        <Button text='JOIN HYDRA' className='main-button' />
      </div>
    </nav>
  )
}
export default Nav