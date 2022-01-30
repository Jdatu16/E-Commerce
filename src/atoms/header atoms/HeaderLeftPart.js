import { useContext } from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import { StateContext } from "../../App";
import { MenuSvg } from "../../svg";

const HeaderLeft = styled.div`
  width: 50%;

  display: flex;
  justify-content: flex-start;
  gap: 30px;
  align-items: center;
  img {
    min-width: 60px;
    width: 7rem;
  }
  @media only screen and (min-width: 620px) {
    width: 15%;
    & > :first-child {
      display: none;
    }
  }
`;

export const HeaderLeftPart = () => {
  // after clicking MenuSvg, which is only displayed if users screen width is less
  // than 620px, side menu will open
  const { setToggleSideMenu } = useContext(StateContext);
  return (
    <HeaderLeft>
      <MenuSvg
        onClick={() => setToggleSideMenu("open")}
        width={16}
        height={15}
      />
      <img src={logo} alt="logo" />
    </HeaderLeft>
  );
};
