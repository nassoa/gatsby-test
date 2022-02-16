import React from 'react'
import {Link} from 'gatsby'

const homecontact = () => {
  return (
    <section className="sect-homecontact">
        <div className="container">
            <h2 className="title-style">
                <span>Boostez <br /> votre</span> communication!
            </h2>
            <div className="desc">
                Une idée, un projet ? <br />
                Une demande de devis ? <br />
                Envie d’en savoir plus sur nos prestations ? <br />
                Ou simplement d’échanger avec nous ?
            </div>
            <Link to="#" className="btn btn-primary">Contactez-nous</Link>
        </div>
    </section>
  )
}

export default homecontact