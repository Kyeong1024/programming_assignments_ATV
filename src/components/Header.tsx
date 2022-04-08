import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

const Common = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #1565c0;
`;

const HomeLink = styled.a`
  display: flex;
  align-items: center;
`;

const ControlBox = styled.div`
  display: flex;
  align-items: center;
`;

const Controler = styled.div`
  margin: 5px;
  color: white;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Menu = styled.a`
  display: flex;
  align-items: center;
  font-size: 30px;
  position: relative;
  color: white;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <Common>
      <Menu>
        <AiOutlineMenu />
      </Menu>
      <HomeLink href="https://capa.ai/">
        <img src={require("../assets/logo.png")} alt="logo" />
      </HomeLink>
      <ControlBox>
        <Controler>
          <img src={require("../assets/company.png")} alt="vector" />
          가공업체
        </Controler>
        <Controler>로그아웃</Controler>
      </ControlBox>
    </Common>
  );
};

export default Header;
