import React from 'react'
import {Link} from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const footer = () => {
  return (
    <div className="footer-container">
        <div className="container">
            <div className="footer-sections">
                <div className="footer-columns">
                    <div className="footer-logo">
                        <StaticImage src="../../assets/images/logo-lueur-externe-communication-web-agency.svg" alt="" />
                    </div>
                    <div className="desc">
                        <p>Tel. 04 93 42 33 18</p>
                        <p>Parc d'Activité des Bois de Grasse <br />
                        1, avenue Louison Bobet <br />
                        06130 GRASSE</p>
                    </div>
                </div>
                <div className="footer-columns">
                    <h1 class="foo-title"><span class="uk-text-background">Suivez-nous</span></h1>
                    
                </div>
                <div className="footer-columns">
                    <h1 class="foo-title"><span class="uk-text-background">Lueur Externe</span></h1>
                    <ul>
                        <li> <Link to="#">L'agence</Link> </li>
                        <li> <Link to="#">Recrutement</Link> </li>
                        <li> <Link to="#">Nous contacter</Link> </li>
                        <li> <Link to="#">Blog</Link> </li>
                    </ul>
                </div>
                <div className="footer-columns">
                    <h1 class="foo-title"><span class="uk-text-background">Nos Services</span></h1>
                    <ul>
                        <li> <Link to="#">Studio graphique</Link> </li>
                        <li> <Link to="#">Web & Digital Marketing</Link> </li>
                        <li> <Link to="#">Digitalisation de processus</Link> </li>
                        <li> <Link to="#">Conseil & Stratégie</Link> </li>
                        <li> <Link to="#">Photo & Vidéo</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer