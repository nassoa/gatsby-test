import React from 'react'
import {Link} from 'gatsby'
import Navbar from './Navbar'
import Headbanner from './Headbanner'
import '../../assets/css/global.css'
import logo from '../../assets/images/logo-lueur-externe-communication-web-agency-blc.svg'

const layout = ({ children }) => {
  return (
    <main class="main-container">
      <div class="header-container">
        <div class="container">
          <div class="logo-content">
            <Link to="/"><img src={logo} alt=""/></Link>
          </div>
          <Navbar />
          <Headbanner />
        </div>
      </div>
      { children }
    </main>
  )
}

export default layout