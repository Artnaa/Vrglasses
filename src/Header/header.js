import row from '../Assets/icons/arrow-small-right.svg'
import Button from '../Helpers/buttons/button';
import vrglasses from '../Assets/Images/pexels-michelangelo-buonarroti-8728382 1.png'
import './header.css'

export function header() {
  return (
    <section className="vr_glasses">
      <div className="vr_glasses_left_side">
        <h1><span>Dive</span> Into The Depths Of <span> Virtual Reality</span></h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          nisl tincidunt eget. Lectus mauris eros in vitae .
        </p>
        <div className='build_world_row'>
          <Button text='BUILD YOUR WORLD' className={'main-button'} />
          <img src={row} alt="row_icon" />
        </div>
      </div>

      <div className="vr_glasses_right_side">
        <img src={vrglasses} alt=""  className='vr_glasses_pic'/>
      </div>
    </section>
  )
}