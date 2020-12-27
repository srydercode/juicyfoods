// import { Container } from 'react-bootstrap'

const Header = (props) => {
  return (
    <>
      <h1 className='site-heading text-center text-white d-none d-lg-block'>
        <span className='site-heading-upper text-primary mb-3'>
          {props.pageTitle}
        </span>
        <span className='site-heading-lower text-capitalize'>{props.pageDescription}</span>
      </h1>
    </>
  )
}

export default Header
