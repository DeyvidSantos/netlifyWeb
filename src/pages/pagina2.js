import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <h1>Netlify e uma Capivara.</h1>
    <p>Vamos ver como funciona o Netlify.</p>
    <p>BORA LÁ.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
  </Layout>
)

export default IndexPage
