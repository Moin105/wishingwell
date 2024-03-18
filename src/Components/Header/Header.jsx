import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import './header.css'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
    <Link to="/homepage">
        <h2>SendWish</h2>
    </Link>
        <span>
        <RxHamburgerMenu />
        </span>

    </header>
  )
}

export default Header