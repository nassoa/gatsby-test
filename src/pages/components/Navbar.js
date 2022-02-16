import React from 'react'
import {Link} from 'gatsby'

const Navbar = () => {
  return (
    <nav class="navbar-content">
        <ul>
            <li> <Link to="/">Accueil</Link> </li>
            <li> <Link to="#">Services</Link> </li>
            <li> <Link to="#">Réalisations</Link> </li>
            <li> <Link to="#">L'agence</Link> </li>
            <li> <Link to="#">Blog</Link> </li>
            <li> <Link to="#">Contact</Link> </li>
        </ul>
    </nav>
  )
}

export default Navbar