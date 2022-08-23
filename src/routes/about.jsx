import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function AboutPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="About">
          <p>
          Founded in 2000, Chaudhary Waleed, formerly Chaudhary Attorneys, provides legal services in the areas of  legal due diligence, contracts, company incorporation, intellectual property, merger and competition law,
           white collar crime, commercial litigation and domestic and international arbitration.
          </p>
          <p>
          For the past 11 years in a row, our firm has been recommended by the Legal 500 as one of Pakistan’s leading law firms.  
           The combination of our lawyers’ local and international experience enables our firm to have a deeper understanding of the 
           requirements and objectives of our international clients and offer strategic legal advice on relevant
           issues and devise effective legal strategies in connection with both domestic and international litigation and arbitration.
          </p>
          
        </ArticleContent>

        <ArticleMedia>
          <img
            src="/assets/law.png"
            alt="Lorem Picsum"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
