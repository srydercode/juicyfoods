import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Menu from '../components/Menu'
import AboutPageDescription from '../components/AboutPageDescription'

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <Header pageTitle='About' pageDescription='About Page' />
      <Menu />
      <AboutPageDescription />
    </>
  )
}

export default AboutPage
