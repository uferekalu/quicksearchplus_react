import React from 'react'
import '../profileMenu/profileMenuDropdown.css'

const ProfileMenuDropdown = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      id="profileMenu"
      className="showdropdown"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="profileDropdown">
        <div className="profileHolder">
          <i className="fa-regular fa-user icon__g"></i>
          <span className="profileText">Profile</span>
        </div>
        <div className="dashboardHolder">
          <i className="fa-solid fa-gauge icon__g"></i>
          <span className="dashboardText">Dashboard</span>
        </div>
        <div className="shareHolder">
          <i className="fa-solid fa-share-nodes icon__g"></i>
          <span className="shareText">Share</span>
        </div>
        <div className="authenticationHolder">
          <i
            className="fa-solid fa-arrow-right-to-bracket"
            style={{ color: '#034aa6', fontSize: '14px' }}
          ></i>
          <span className="authenticateText">Signin</span>
        </div>
        <div className="authenticationLogoutHolder">
          <i
            className="fa-solid fa-arrow-right-to-bracket"
            style={{ color: '#034aa6', fontSize: '14px' }}
          ></i>
          <span className="authenticateText">Sign Out</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileMenuDropdown
