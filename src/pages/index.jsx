import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={['AUTO', 'WEBP', 'AVIF']}
      alt="A Gatsby astronaut"
      style={{ marginBottom: '1.45rem' }}
    />
    <p>
      <Link to="/page-2/">
        <Button variant="contained" color="success" endIcon={<SendIcon />}>
          Go to page 2
        </Button>
        <br />
      </Link>
      <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
    </p>
  </Layout>
)

export default IndexPage
