import logo from "../assets/img/logo.png";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <h1>ZapRecall</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;

  img {
    width: 52px;
  }

  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;
