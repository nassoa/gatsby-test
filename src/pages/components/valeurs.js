import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const valeurs = () => {
  return (
    <section className="sect-valeurs">
        <h2 className="title-style">
            <span>Nos</span> Valeurs
        </h2>
        <div className="valeurs-list">
            <div className="valeurs-block">
                <div className="image">
                    <StaticImage src="../../assets/images/agence-de-com-reactive-grasse-b3c224f2.jpeg" alt="" />
                </div>
                <h3> Réactivité </h3>
                <div className="desc">
                    Nous anticipons les évolutions sur le marché de la communication pour vous apporter <strong>des solutions toujours plus innovantes dans
                    le respect de vos délais.</strong>
                </div>
            </div>
            <div className="valeurs-block">
                <div className="image">
                    <StaticImage src="../../assets/images/agence-de-com-curiosite-45057d92.jpeg" alt="" />
                </div>
                <h3> Curiosité </h3>
                <div className="desc">
                    Sans curiosité, il n’y aurait pas de créativité ! Alors <strong>notre équipe fouille,
                    veille et décrypte les tendances de demain</strong> pour les mettre <strong>au service de vos projets et de vos idées.</strong>
                </div>
            </div>
            <div className="valeurs-block">
                <div className="image">
                    <StaticImage src="../../assets/images/agence-de-communication-a-l-ecoute-99994bc8.jpeg" alt="" />
                </div>
                <h3> Écoute </h3>
                <div className="desc">
                    Seul « <strong>Celui qui écoute pleinement peut communiquer efficacement</strong> ». Avant d’agir, nous sommes donc toujours <strong>à l’écoute de vos besoins</strong>,
                 pour les satisfaire et les réaliser pleinement.
                </div>
            </div>
            <div className="valeurs-block">
                <div className="image">
                    <StaticImage src="../../assets/images/agence-de-com-ethique-a58f8705.jpeg" alt="" />
                </div>
                <h3> Ethique </h3>
                <div className="desc">
                    <strong>Le respect, la confidentialité, la convivialité, la solidarité</strong> sont les valeurs qui nous animent quotidiennement,
                    et qui font de Lueur Externe une agence pas comme les autres.
                </div>
            </div>
        </div>
    </section>
  )
}

export default valeurs