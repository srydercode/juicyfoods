import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Menu from '../components/Menu'
import CallToActionHomePage from '../components/CallToActionHomePage'
import PublicMessageHome from '../components/PublicMessageHome'

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>JuicyFoods</title>
      </Helmet>
      <Header
        pageTitle='JuicyFoods'
        pageDescription='get the natural taste in your juice'
      />
      <Menu />
      <CallToActionHomePage />
      <PublicMessageHome />
    </div>
  )
}

export default HomePage
