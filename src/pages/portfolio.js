import React, { useState } from 'react'
import Layout from '../components/layout'

export default () => {
    const [active, setActive] = useState(['active','','']);

    return (
        <Layout>
            <SEO title="Portfolio"/>
            <div className="wrapper portfolio">
                <div id={active[2]} className="card service">
                    <span>.003</span>
                    <h3>KindleShare</h3>
                    <p>
                        Une app pour visiter sa librairie Kindle (ebook & highlights). Partagez vos highlights et vos pensées. Suivez les personnes qui vous inspirent pour découvrir leurs lectures.
                        <br/>
                        <br/>Technos:
                        <br/>+ MERN Stack 
                        <br/>+ Redux 
                        <br/>+ puppeteer
                        <br/>+ bootstrap/reactstrap
                        <br/>en savoir plus >
                    </p>
                </div>
                <div id={active[1]} className="card service">
                    <span>.002</span>
                    <h3>Mon Portfolio</h3>
                    <p>
                        Ce site ;)
                        <br/>
                        <br/>Technos:
                        <br/>+ Gatsby
                        <br/>+ JAM Stack
                        <br/>+ Figma
                        <br/>en savoir plus >
                    </p>
                </div>
                <div id={active[0]} className="card service">
                    <span>.001</span>
                    <h3>Flips - Landing Page</h3>
                    <p>
                        Flips est une startup @ENSTA Paris qui développe une appli mobile pour se faire rencontrer des étudiants à l'occasion
                        d'évènements sur des centres d'intérêts commun.
                        <br/>
                        <br/>Technos:
                        <br/>+ Figma
                        <br/>+ Gatsby
                        <br/>+ CSS Grid / mobile-first approach
                        <br/>en savoir plus >
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