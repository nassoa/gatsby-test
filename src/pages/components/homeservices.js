import React from 'react'
import {Link} from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const homeservices = () => {
  return (
    <section class="sect-services">
        <div class="services-columns">
          <Link to="#" class="service-block">
              <div class="image">
                <StaticImage
                  src="../../assets/images/icone-studio-graphique.svg"
                  width={200}
                  alt=""
                />
              </div>
              <span>Studio</span>
              <h2>GRAPHIQUE </h2>
              <div className="desc">Identité visuelle / Refonte Logo / Branding / Concept Campagne</div>
          </Link>
          <Link to="#" class="service-block">
              <div class="image">
                <StaticImage
                  src="../../assets/images/icone-web-labo.svg"
                  width={200}
                  alt=""
                />
              </div>
              <span>Web & Digital </span>
              <h2>MARKETING </h2>
              <div className="desc">Site vitrine / Site E-Commerce / SEO / Newsletter / Bannière fixe & animée </div>
          </Link>
          <Link to="#" class="service-block">
              <div class="image">
                <StaticImage
                  src="../../assets/images/icone-digitalisation-des-processus.svg"
                  width={200}
                  alt=""
                />
              </div>
              <span>Digitalisation  </span>
              <h2>DE PROCESSUS  </h2>
              <div className="desc">Marketing Automation / Transformation digitale  </div>
          </Link>
          <Link to="#" class="service-block">
              <div class="image">
                <StaticImage
                  src="../../assets/images/icone-conseils-strategie.svg"
                  width={200}
                  alt=""
                />
              </div>
              <span>Conseils & </span>
              <h2>STRATÉGIE</h2>
              <div className="desc">Plan Média / Audit marketing / Stratégie cross media </div>
          </Link>
          <Link to="#" class="service-block">
              <div class="image">
                <StaticImage
                  src="../../assets/images/icone-photo-video.svg"
                  width={200}
                  alt=""
                />
              </div>
              <span>Photo & </span>
              <h2>VIDÉO</h2>
              <div className="desc">Shooting Photo / Studio & exterieur / Retouches / Montages</div>
          </Link>
          <Link to="#" class="service-block">
              <div class="image">
                <StaticImage
                  src="../../assets/images/icone-hebergement-securise.svg"
                  width={200}
                  alt=""
                />
              </div>
              <span>Hébergement </span>
              <h2>SÉCURISÉ </h2>
              <div className="desc">Hébergement // Nom de domaine // Serveurs dediés // Réseau</div>
          </Link>
        </div>
    </section>
  )
}

export default homeservices