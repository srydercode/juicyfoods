import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Menu = () => {
  return (
    <>
      <Navbar
        expand='lg'
        collapseOnSelect
        className='navbar navbar-expand-lg  py-lg-4 justify-content-center navbar-dark navbar-bg'
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>JuicyFoods</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav classNameName='mr-auto'>
              <LinkContainer to='/about'>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav classNameName='mr-auto'>
              <LinkContainer to='/products'>
                <Nav.Link>Products</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav classNameName='mr-auto'>
              <LinkContainer to='/store'>
                <Nav.Link>Stores</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu
