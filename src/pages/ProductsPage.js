import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Products from '../components/Products'

const ProductsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Products</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <Header pageTitle='Products' pageDescription='This is the Products Page' />
      <Menu />
      <Products />
    </div>
  )
}

export default ProductsPage
