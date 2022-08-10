import React from 'react'
import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SiteLogo from '../assets/images/logo.png'

export default function Header() {
  return (
    <>
      <section className='main_header'>
        <header className='header_section'>

          <Navbar expand="lg" className='site_nav'>
            <Container>
              <Link to="/" className='navbar-brand site_logo'>
                <Image src={SiteLogo} fluid />
                <p>Sliceledger</p>
              </Link>
              <Navbar.Toggle className='menu_bar' aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="my-2 me-5 my-lg-0">
                <Link to="/research" className='custom_link6 nav-link'>Research</Link>
                  <a className='custom_link6 nav-link' href='https://slice-ledger.gitbook.io/sliceledger/api' target="_blank">Developers</a>
                  <Link to="/enterprise" className='custom_link6 nav-link'>Enterprise</Link>
                  <Link to="/network" className='custom_link4 nav-link'>Network</Link>
                  <a className='custom_link6 nav-link' href='https://slice-ledger.gitbook.io/sliceledger/' target="_blank">Docs</a>
                </Nav>
                <Nav className='headerbutton_nav'>
                  <a className='headerbutton' href='https://slice-ledger.gitbook.io/sliceledger/api' target="_blank">#BuildwithSliceLedger</a>
                </Nav>

              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </section>
    </>
  )
}



{/* <header>
<Navbar expand="lg" className='site_nav' >
  <Container>
    <Link to="/" className='navbar-brand site_logo'>
      <Image src={SiteLogo} fluid />
      <p>Sliceledger</p>
    </Link>
    <Navbar.Toggle  className='menu_bar'aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav
        className=" my-2 my-lg-0"
        
        style={{ maxHeight: '400px' }}
        navbarScroll
      >
        <a className='custom_link6 nav-link' href='https://bharti-lokhande.gitbook.io/sliceledger/api'>Developers</a>
        <Link to="/enterprise" className='custom_link6 nav-link'>Enterprise</Link>
        <Nav.Link href="#action4" className='custom_link4'>Network</Nav.Link>
        <a className='custom_link6 nav-link' href='https://bharti-lokhande.gitbook.io/sliceledger/'>Docs</a>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</header> */}