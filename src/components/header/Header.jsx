import React, { useState } from 'react'
import '../header/header.css'
import ProfileMenuDropdown from '../profileMenu/ProfileMenuDropdown'

const Header = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const handleShowProfileDropdown = () => {
    setShowProfileDropdown(true)
  }

  const handleHideProfileDropdown = () => {
    setShowProfileDropdown(false)
  }
  return (
    <>
      <div className="header">
        <div className="logoHolder">
          <img src="icons/mainLogo.png" alt="logo" className="logoImg" />
        </div>
        <span className="welcomeUser">Goodnews</span>
        <div className="gptProfileHolder">
          <div className="gpt__switch-cont gptImg">
            <label className="switch">
              <input type="checkbox" id="toggle-switch" />
              <span className="slider"></span>
            </label>
            <span>GPT</span>
          </div>
        </div>
        <div
          className="profile__cont show__profile"
          onMouseEnter={handleShowProfileDropdown}
          onMouseLeave={handleHideProfileDropdown}
        >
          <i className="fa-regular fa-user fa-user show__profile"></i>
          <div className="profileIdentity">K</div>
          <img
            src="icons/icon48.png"
            alt="profile-img"
            className="profileImageIdentity"
          />
          <i className="fa-solid fa-caret-down show__profile"></i>
        </div>
      </div>
      {showProfileDropdown && (
        <ProfileMenuDropdown
          onMouseEnter={handleShowProfileDropdown}
          onMouseLeave={handleHideProfileDropdown}
        />
      )}
    </>
  )
}

export default Header
