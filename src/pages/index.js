import React from "react"
import Layout from './components/Layout'
import Homeservices from './components/homeservices'
import Homeportfolio from './components/portfolio'
import Homevaleurs from './components/valeurs'
import Homecontact from './components/homecontact'

export default function Home() {
  return (
    <Layout>
      <div class="container">
        <Homeservices />
        <Homeportfolio />
        <Homevaleurs />
      </div>
      <Homecontact />
    </Layout>
  )
}
