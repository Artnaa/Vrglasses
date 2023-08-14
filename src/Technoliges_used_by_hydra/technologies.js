import './technologies.css'
import backgrounphoto from '../Assets/Images/pexels-rodnae-productions-8097332 1.png'
import unreal_logo from '../Assets/icons/lohotype/Hydra-Tech1 1.png'
import unity_logo from '../Assets/icons/lohotype/Hydra-Tech2 1.png'
import oculus_logo from '../Assets/icons/lohotype/Hydra-Tech3 1.png'
import vive_logo from '../Assets/icons/lohotype/Hydra-Tech4 1.png'
import bigarrow from '../Assets/icons/bigarrow.svg'
import smallarrow from '../Assets/icons/arrow-small-right.svg'

export function technologies() {
  return (
    <section className='technologies'>

      <div className="technologies_by_hydra">
        <div className='hardware'>
          <h3>TECHNOLOGIES & HARDWARE</h3>
          <h4>USED BY HYDRA VR.</h4>
        </div>
      </div>

      <div className='vr_brands'>
        <div className='vr_brands_logotypes'>
          <img src={unreal_logo} alt="game_logo" />
          <img src={unity_logo} alt="game_logo" />
          <img src={oculus_logo} alt="game_logo" />
          <img src={vive_logo} alt="game_logo" />
        </div>
      </div>

      <div className='introduction_vr'>

        <div className='introduction_vr_content'>

          <div className='introduction_vr_content_left_side arrow_content'>
            <h3 className='bol_dtext_title'>WHY BUILD</h3>
            <h4 className='thin_text_subtitle'>WITH HYDRA?</h4>
          </div>

          <div className=' introduction_vr_content_left_side_arrow'>
            <img src={bigarrow} alt="" className='bigarrow' />
          </div>

        </div>

        <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>

      <div className='steps_to_deploy'>

        <div className='steps_to_deploy_card'>
          <div className='steps_to_deploy_elipses'>
            01
          </div>

          <div className='steps_to_deploy_elipses_content'>
            <img src={smallarrow} alt="" />
            <p>3D Conception
              & Design</p>
          </div>
        </div>

        <div className='steps_to_deploy_card'>
          <div className='steps_to_deploy_elipses'>
            02
          </div>

          <div className='steps_to_deploy_elipses_content'>
            <img src={smallarrow} alt="" />
            <p>3D Conception
              & Design</p>
          </div>
        </div>

        <div className='steps_to_deploy_card'>
          <div className='steps_to_deploy_elipses'>
            03
          </div>

          <div className='steps_to_deploy_elipses_content'>
            <img src={smallarrow} alt="" />
            <p>3D Conception
              & Design</p>
          </div>
        </div>

        <div className='steps_to_deploy_card'>
          <div className='steps_to_deploy_elipses'>
            04
          </div>

          <div className='steps_to_deploy_elipses_content'>
            <img src={smallarrow} alt="" />
            <p>3D Conception
              & Design</p>
          </div>
        </div>



        
      </div>
    </section>
  )
}