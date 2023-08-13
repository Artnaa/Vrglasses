import bigarrow from '../Assets/icons/bigarrow.svg'
import introductionvrglasses from '../Assets/Images/pexels-shvets-production-7562014 1.png'
import Button from '../Helpers/buttons/button';
import './about.css'

export function about() {
  return (
    <section className='about_vr_glasses'>
      <div className='introduction_vr'>

        <div className='introduction_vr_content'>

          <div className='introduction_vr_content_left_side arrow_content'>
            <h3 className='bol_dtext_title'>INTRODUCTION</h3>
            <h4 className='thin_text_subtitle'>TO HYDRA VR</h4>
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


      <div className='about_hydra_vr_glasses'>

        <div className='about_hydra_vr_glasses_left_side'>
          <img src={introductionvrglasses} alt="vrglasses" className='hydravrglasses' />

        </div>

        <div className='about_hydra_vr_glasses_right_side'>
          <h3 className='bol_dtext_title'>WHY BUILD</h3>
          <h4 className='thin_text_subtitle'>WITH HYDRA?</h4>
          <p>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
            urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
            dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
            Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
            sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
            cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
            retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
            n tempor.
          </p>
          <Button text='BUILD YOUR WORLD' className='main-button' />

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
    </section>
  )
}