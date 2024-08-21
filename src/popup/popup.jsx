import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../components/header/Header'
import './popup.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from '../components/home/Home'
import Footer from '../components/footer/Footer'

const Popup = () => {
  const [openInNewTab, setOpenInNewTab] = useState(false)
  return (
    <div className="main_container">
      <Header />
      <Home openInNewTab={openInNewTab} />
      <Footer setOpenInNewTab={setOpenInNewTab} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Popup />)
