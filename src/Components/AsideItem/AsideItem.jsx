import './AsideItemStyle.css'

import React from 'react'

const Asideitem = (props) => {

    const {text, img, goTo} = props

  return (
    <div className="Aside-item">
        <img src={img} alt="" />
        <h1>{text}</h1>
    </div>
    
  )
}

export default Asideitem