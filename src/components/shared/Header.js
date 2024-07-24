import React from "react";
import styled from "styled-components";
import Searchbar from "../shared/Searchbar";
import ProfileMenu from "../shared/Profilemenu";

const MainHeader = styled.div`
  width: 100%;
  padding: 20px 40px;
  height: 100px;
  //background-color: aliceblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoAndSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%; 
`;

const Logo = styled.img`
  width: 180px;
  margin-right: 20px; 
`;

const ProfileMenuContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end; 
`;

const Header = () => {
  return (
    <MainHeader>
      <LogoAndSearchContainer>
        <Logo src="https://meolaa.com/images/app_images/brand-logo.png" />
        <Searchbar />
      </LogoAndSearchContainer>
      <ProfileMenuContainer>
        <ProfileMenu />
      </ProfileMenuContainer>
    </MainHeader>
  );
};

export default Header;
