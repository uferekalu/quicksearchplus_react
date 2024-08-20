import React from 'react'
import '../footer/footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="openTabHolder">
        <span className="openTabText">Open in new tab</span>
        <input type="checkbox" id="open-in-new-tab" />
      </div>
      <div className="copyright">
        <span> © 2024 QuickSearch+ </span>
      </div>
      <div className="emptyDiv"></div>
    </div>
  )
}

export default Footer
