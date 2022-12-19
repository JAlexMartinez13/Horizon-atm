import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, 
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink } from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Horizon ATM</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem> 
                    <NavItem>
                        <NavLinks to='Contact'>Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar