import React from "react";
import { HeaderContainer,HeaderInfo,HeaderTitle,HeaderP,Headerbtn,data} from "./Header.style";
import Navbar from "../Navbar.js/index";
function Header() {
  return (
    <HeaderContainer>
      <Navbar></Navbar>
       {data.map((item) => {
          const {title,info,Btn,id} = item;
          return <HeaderInfo key={id}>
                  <HeaderTitle>{title}</HeaderTitle>
                  <HeaderP>{info}</HeaderP>
                  <Headerbtn>{Btn}</Headerbtn>
          </HeaderInfo>
       })}
      
    </HeaderContainer>
  );
}

export default Header;
