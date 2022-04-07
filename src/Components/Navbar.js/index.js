import React from 'react'
import {NavContainer,NavIcon,NavLinks,NavLink} from './Navbar.style'
import logo from '../../images/logo.png'
function Navbar() {
  return (
    <NavContainer>
        <NavIcon src={logo} />
        <NavLinks>
            <NavLink><a href='#'>HOME</a></NavLink>
            <NavLink><a href='#'>ABOUT</a></NavLink>
            <NavLink><a href='#'>COURSE</a></NavLink>
            <NavLink><a href='#'>CONTACT</a></NavLink> 
        </NavLinks>
    </NavContainer>
  )
}

export default Navbar