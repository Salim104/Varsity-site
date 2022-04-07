import styled from 'styled-components'




export const NavContainer = styled.div`
display:flex;
justify-content:space-between;
align-items: center;
background:transparent;
  width:100%;
  height:60px;
`

export const NavIcon = styled.img`
margin-left:10px;
padding-top:20px;
width:140px;
`

export const NavLinks = styled.ul`
display:flex;
justify-content:space-around;
padding:10px;
`
export const NavLink = styled.li`
display:flex;
justify-content:space-around;
color:white;
padding:10px;
 a{
     text-decoration: none;
     color:#fff;
 }
`