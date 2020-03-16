import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

export default () => {
  const [active, setActive] = useState(["active", "", ""])

  return (
    <Layout>
      <SEO title="Services" />
      <div className="wrapper portfolio">
        <div id={active[0]} className="card service">
          <span>.001</span>
          <h3>Landing page & Home page</h3>
          <p>
            Une landing page pour obtenir plus de leads.
            <br />
            Une home page pour présenter votre produit.
            <br />
            <br />
            Exemples:
            <br />- appli mobile & web
            <br />- restaurants & hotels
            <br />- startups
          </p>
        </div>
        <div id={active[1]} className="card service">
          <span>.002</span>
          <h3>Portfolio & Site Perso</h3>
          <p>
            Beaucoup de freelance et d'entrepreneurs dépendent encore d’une
            plateforme pour trouver leurs clients.
            <br />
            <br />
            Devenez vraiment indépendant grâce à votre propre site:
            <br />- démontrez vos compétences avec un book/portfolio
            <br />- présentez votre offre de service dans une page de vente
          </p>
        </div>
        <div id={active[2]} className="card service">
          <span>.003</span>
          <h3>PoC & Prototype & MVP</h3>
          <p>
            Vous voulez lancer votre projet, et vous êtes conscient qu’il faut
            vite se confronter au marché. Trois solutions s’offrent à vous:
            <br />
            1. un <b>PoC</b> (Proof of Concept)
            <br />
            2. un <b>prototype</b>
            <br />
            3. un <b>MVP</b> (Minimum Viable Product)
            <br />
            <br />
            Les cas d’utilisations sont très différents et le choix très
            important.
            <br />
            <Link to="/blog">Je partage mon expérience à ce propos -></Link>
          </p>
        </div>
        <nav>
          <span
            id={active[0]}
            onClick={() => setActive(["active", "", ""])}
          ></span>
          <span
            id={active[1]}
            onClick={() => setActive(["", "active", ""])}
          ></span>
          <span
            id={active[2]}
            onClick={() => setActive(["", "", "active"])}
          ></span>
        </nav>
      </div>
    </Layout>
  )
}
