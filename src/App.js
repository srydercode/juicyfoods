import { BrowserRouter as Router, Route } from 'react-router-dom'

// components
// import Menu from './components/Menu'
import Footer from './components/Footer'

// pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import StorePage from './pages/StorePage'

// styles
import './App.css'

const App = () => {
  return (
    <Router>
      <main>
        <Route path='/' component={HomePage} exact />
        <Route path='/about' component={AboutPage} />
        <Route path='/products' component={ProductsPage} />
        <Route path='/store' component={StorePage} />
      </main>
      <Footer />
    </Router>
  )
}

export default App
