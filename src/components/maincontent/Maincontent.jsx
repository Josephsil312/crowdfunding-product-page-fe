import './maincontent.css'
import logobackground from '../../images/image-hero-desktop.jpg'

const Maincontent = () => {
  return (
    <>
      <div className="mainContentContainer">
        <img src={logobackground} alt="" className="background" />
        <h3 className='crowdfund'>Crowd Fund</h3>
        <div className="lists">
          <div className="list">About</div>
          <div className="list">Discover</div>
          <div className="list">Get started</div>
        </div>
      </div>

    </>
  )
}

export default Maincontent