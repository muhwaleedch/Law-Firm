import React from 'react'

import { Layout } from '../components/layout'
import { Hero } from '../components/hero'
import { HeroIllustration } from '../components/hero-illustration'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Chaudhary Attorneys"
        content="The highly professional team of experienced and expert lawyers from Chaudhary Attorneys is at your back and call and is ready to offer you sound legal advice. It represents and protects your interests on all appropriate forums."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
