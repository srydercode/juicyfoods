import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Menu from '../components/Menu'
import AboutPageDescription from '../components/AboutPageDescription'

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Header
        pageTitle='About'
        pageDescription='our mission and vission is clear'
      />
      <Menu />
      <AboutPageDescription />
    </>
  )
}

export default AboutPage
