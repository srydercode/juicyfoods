import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Menu from '../components/Menu'
import StoreItem from '../components/StoreItem'

const StorePage = () => {
  return (
    <div>
      <Helmet>
        <title>Our Store</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <Header pageTitle='Store' pageDescription='This is the Store Page' />
      <Menu />
      <StoreItem />
    </div>
  )
}

export default StorePage
