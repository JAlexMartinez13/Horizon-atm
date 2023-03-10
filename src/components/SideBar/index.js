import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute, SidebarBtnLink, 
     } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
                <SidebarLink to='partners' onClick={toggle}>Partners</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
    )
}

export default Sidebar