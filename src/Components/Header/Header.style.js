import styled from "styled-components";
import BgPic from '../../images/banner.png'

export const data = [
  {
    id:'01',
    title:'Worlds biggest university',
    info:'making websites is one of the easiest things in the world.you just need to learn HTML,CSS, JAVASCRIPT and you are good to go',
    Btn:'Visit Us to Know More'
  }

]
export const HeaderContainer = styled.section`
  width:100%;
  height:100vh;
 background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),
  url(${BgPic});
  background-position: center;
  background-size: cover;
  position: relative;
 
`

export const HeaderInfo = styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

`
export const HeaderTitle = styled.h1`
   font-size:66px;
   font-weight:600;
   color:#fff;
   margin:20px 0;
`
export const HeaderP = styled.p`
    font-size:16px;
   font-weight:400;
   word-wrap: normal;
    color:#fff;
`
export const Headerbtn = styled.button`
  border:2px solid white ;
  background: transparent;
  padding: 11px;
  cursor: pointer;
   color:#fff;
   transition: 1.3s;

  &:hover{
    background: tomato;
  }
`