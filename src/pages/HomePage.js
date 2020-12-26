import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Menu from '../components/Menu'
import CallToActionHomePage from '../components/CallToActionHomePage'
import PublicMessageHome from '../components/PublicMessageHome'

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <Header pageTitle='Landing' pageDescription='This is the Landing Page' />
      <Menu />
      <CallToActionHomePage />
      <PublicMessageHome />
    </div>
  )
}

export default HomePage
