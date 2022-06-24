import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
   return (
      <StyledFooter>
         <span>© 2022 EASYearn. All rights reserved</span>
      </StyledFooter>
   )
}

const StyledFooter = styled.footer`
   padding: 60px 110px 60px 0;
   color: #bdc1be;
   font-size: 18px;
   font-weight: 400;
   display: flex;
   justify-content: flex-end;
`
