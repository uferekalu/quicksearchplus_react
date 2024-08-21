import React from 'react'
import '../footer/footer.css'

const Footer = ({ setOpenInNewTab }) => {
  return (
    <div className="footer">
      <div className="openTabHolder">
        <span className="openTabText">Open in new tab</span>
        <input
          type="checkbox"
          id="open-in-new-tab"
          onChange={(event) => setOpenInNewTab(event.target.checked)}
        />
      </div>
      <div className="copyright">
        <span> © 2024 QuickSearch+ </span>
      </div>
      <div className="emptyDiv"></div>
    </div>
  )
}

export default Footer
