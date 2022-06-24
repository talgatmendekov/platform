import styled from 'styled-components'

const Button = (props) => {
   return <ButtonStyled {...props}>{props.children}</ButtonStyled>
}
const ButtonStyled = styled.button`
   border: none;
   color: ${({ color }) => color || 'white'};
   font-size: ${({ fontsize }) => fontsize || '14px'};
   background: linear-gradient(#a59dff, #dc71fd, #ff7e7e);
   box-shadow: 0px 1px 2px rgba(58, 16, 229, 0.2);
   border-radius: 8px;
   cursor: pointer;
   text-transform: uppercase;
`
export default Button
