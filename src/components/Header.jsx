import React, { useState } from 'react'
import { headerNav } from "../constants/data"
import { Link } from "react-router-dom";

console.log(headerNav)

const Header = () => {
  const [show, setShow] = useState(false);
  console.log(show)

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow)
  }

  return (
    <header id='header' role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <h1>
            <a href="/">portfolio<em>react.js</em></a>
          </h1>
        </div>
        
        {/* 라우팅 & Link 테스트 */}
        {/* <div>
          <div><Link to="/a">소개</Link></div>
          <div><Link to="/w">작업물</Link></div>
        </div> */}
        {/* 라우팅 & Link 테스트 */}

        <nav
          className={`header__nav ${show ? "show" : ""}`}
          role="navigation"
          aria-label="메인메뉴"
        >
          <ul>

            {
              headerNav.map((nav, key) => (
                <li key={key}>
                  <a href={nav.url}>{nav.title}</a>
                </li>
              ))
            }
          </ul>
        </nav>
        <div
          className='header__nav__mobile'
          id='headerToggle'
          aria-controls='primary-menu'
          aria-expanded='false'
          role="button"
          tabIndex="0"

          /* onClick={() => setShow((prevShow) => !prevShow)} */

          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header

/* ES7+ React/Redux/React-Nativ sinppets */