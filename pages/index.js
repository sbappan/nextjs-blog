import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi folks. San here. Welcome to my portfolio site. Have a look at my projects below to see what I can do for you. Ping me a message on the contact form if you are interested in what you see or just to say hey.
        </p>
      </section>
    </Layout>
  )
}