import React, { useState } from 'react'
import Layout from '../components/layout'

export default () => {
    const [active, setActive] = useState(['active','','']);

    return (
        <Layout>
            <SEO title="Services"/>
            <div className="wrapper portfolio">
                <div id={active[0]} className="card service">
                    <span>.001</span>
                    <h3>Landing page & Home page</h3>
                    <p>
                        Obtenez plus de leads grâce à une landing page.
                        <br/>Présenter votre produit grâce à une home page.
                        <br/>Exemples:
                        <br/>- appli mobile / web
                        <br/>- restaurant / hotel
                        <br/>- startup
                    </p>
                </div>
                <div id={active[1]} className="card service">
                    <span>.002</span>
                    <h3>Portfolio & Site Perso</h3>
                    <p>
                        Beaucoup d’indépendants dépendent toujours d’une plateforme pour trouver des clients.
                        <br/>Devenez vraiment indépendant grâce à votre propre site:
                        <br/>- démontrez vos qualités avec un book/portfolio
                        <br/>- présentez votre offre de service
                    </p>
                </div>
                <div id={active[2]} className="card service">
                    <span>.003</span>
                    <h3>PoC & Prototype & MVP</h3>
                    <p>
                        Vous voulez lancer votre projet, et vous êtes conscient qu’il faut vite confronter. Trois solutions s’offrent à vous;
                        <br/>1. un PoC (Proof of Concept)
                        <br/>2. un prototype
                        <br/>3. MVP (Minimum Viable Product)
                        <br/>Les cas d’utilisations sont très différents et le choix très important
                        <br/>Je partage mon expérience à ce propos >
                    </p>
                </div>
                <nav>
                    <span onClick={() => setActive(['active', '',''])}></span>
                    <span onClick={() => setActive(['','active',''])}></span>
                    <span onClick={() => setActive(['','','active'])}></span>
                </nav>
            </div>
        </Layout>
    )
}