import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ROUTES } from '../utils/constants/general'
import { ReactComponent as Logo } from '../assets/icons/logo.svg'

export const Header = () => {
   return (
      <StyledHeader>
         <Logo />
         <StyledNav>
            <Link to={ROUTES.MAIN} className="link">
               Main
            </Link>
            <Link to={ROUTES.HOW_IT_WORKS} className="link">
               How it works?
            </Link>
            <Link to={ROUTES.CHOOSE_PLATFORM} className="link">
               Choose platform
            </Link>
            <Link to={ROUTES.PAYMENTS} className="link">
               Payments
            </Link>
            <Link to={ROUTES.CONTACTS} className="link">
               Contacts
            </Link>
            <Link to={ROUTES.SIGN_UP} className="signLink">
               Sign in
            </Link>
         </StyledNav>
      </StyledHeader>
   )
}

const StyledHeader = styled.header`
   display: flex;
   justify-content: space-between;
   padding: 21px 110px 96px 72px;
`
const StyledNav = styled.nav`
   display: flex;
   justify-content: space-between;
   gap: 30px;
   .link {
      color: #f8f7f7;
      font-size: 16px;
      font-weight: 400;
      text-decoration: none;
   }
   .signLink {
      color: #f8f7f7;
      font-size: 16px;
      font-weight: 400;
      text-decoration: none;
      padding-left: 5rem;
   }
`
