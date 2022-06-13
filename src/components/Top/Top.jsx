import './top.css'
import master from '../../images/logo-mastercraft.svg'
import bookmark from '../../images/icon-bookmark.svg'
import { useState } from 'react'
const Top = () => {
  const [toggle, setToggle] = useState(true)

  const display = (toggle ? "Bookmarked" : "Bookmark")

  const handleToggle = () => {
    setToggle(prevState => !prevState)
  }

  return (
    <>
    <div className="topContainer">
      <img src={master} alt="" className="masterclass" />
      <h1 className="topheading">Mastercraft Bamboo Monitor Riser</h1>
      <div className="topcontents" onClick={handleToggle}>
        <img src={bookmark} alt="" className="bookmark" />
        <div className="toggle" >{display}</div>
      </div>
      <p className="toppara">A beautiful and handcrafted monitor stand to reduce neck and eye strain.</p>
      <button className="topbutton" >Back this project</button>
    </div>
    
    </>
  )
}

export default Top