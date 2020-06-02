import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <h1>Segunda página top.</h1>
    <p>Agora já vimos como funciona o Netlify.</p>
    <p>BORA NÃO.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
  </Layout>
)

export default IndexPage
