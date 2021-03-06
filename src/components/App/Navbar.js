import React from 'react'
import { useRecoilState } from 'recoil'
import { Link } from 'gatsby'
import { collapsedState } from '../../utils/recoil-atoms'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedState)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  React.useEffect(() => {
    const elementId = document.getElementById('navbar')
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky')
      } else {
        elementId.classList.remove('is-sticky')
      }
    })
    window.scrollTo(0, 0)
  })

  const classOne = collapsed
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show'
  const classTwo = collapsed
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right'

  return (
    <div id="navbar" className="navbar-area">
      <div className="tarn-nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link
              to="/"
              onClick={() => setCollapsed(true)}
              className="navbar-brand"
            >
              <img style={{ height: 50 }} src={logo} alt="logo" />
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar" />
              <span className="icon-bar middle-bar" />
              <span className="icon-bar bottom-bar" />
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    activeClassName="active"
                    onClick={() => setCollapsed(true)}
                    className="nav-link"
                  >
                    Home
                  </Link>
                </li>
                {/*
                  <li className='nav-item'>
                    <Link
                      to='#'
                      activeClassName='active'
                      onClick={(e) => e.preventDefault()}
                      className='nav-link'
                    >
                      About Us
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link
                      to='#'
                      activeClassName='active'
                      onClick={(e) => e.preventDefault()}
                      className='nav-link'
                    >
                      Expertise
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link
                      to='/blog'
                      activeClassName='active'
                      onClick={() => setCollapsed(true)}
                      className='nav-link'
                    >
                      Blog
                    </Link>
                  </li> */}

                <li className="nav-item">
                  <Link
                    to="/contact"
                    activeClassName="active"
                    onClick={() => setCollapsed(true)}
                    className="nav-link"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
