import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Products from '../components/Products'

const ProductsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <Header pageTitle='Products' pageDescription='Our Juice Products and Food Supplies' />
      <Menu />
      <Products />
    </div>
  )
}

export default ProductsPage
