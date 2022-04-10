import React, { useState } from "react";
import { AiOutlineMenu, AiFillBank } from "react-icons/ai";

import styled from "styled-components";

import Modal from "./Modal";

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

const Menu = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  position: relative;
  color: white;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  height: 100%;
  width: 300px;
  background: white;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const MenuTitle = styled.span`
  padding: 10px;
  font-weight: bold;
  color: #2196f3;
`;

const MenuControlBox = styled.div`
  display: block;
  border-top: 2px solid #e5e5e5;
`;

const MenuControler = styled.div`
  margin: 10px;
  padding: 5px;
`;

const Header = () => {
  const [isMenuClick, setIsMenuClick] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsMenuClick((prev) => !prev);
  };

  return (
    <Common>
      <Menu>
        <AiOutlineMenu onClick={handleMenuClick} />
        {isMenuClick && (
          <Modal>
            <Background onClick={handleMenuClick}></Background>
            <ModalContent>
              <Content>
                <MenuTitle>CAPA 파트너스</MenuTitle>
                <MenuControlBox>
                  <MenuControler>
                    <AiFillBank />
                    파트너 정밀가공
                  </MenuControler>
                  <MenuControler>로그아웃</MenuControler>
                </MenuControlBox>
              </Content>
            </ModalContent>
          </Modal>
        )}
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
