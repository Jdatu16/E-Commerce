import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { HOME_PATH } from "../constants";
import { MEN_PATH, WOMEN_PATH } from "../constants/paths";
import { CloseSVG } from "../svg";

// open sidemenu animation
const slideRight = keyframes`
  0% {
    left: -300px;
    opacity: 0;
  }
  100% {
    left: 0;
    opacity: 1;
  }
`;

// close sidemenu animation
const slideLeft = keyframes`
  0% {
    left: 0;
    opacity: 1;
  }
  100% {
    left: -300px;
    opacity: 0;
  }
`;

const SideMenuBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.664);

  display: ${(props) => (props.toggleSideMenu === "open" ? "block" : "none")};

  @media only screen and (min-width: 620px) {
    display: none;
  }
  z-index: 10;
`;

const SideMenuContainer = styled.div`
  width: 40%;
  max-width: 200px;
  height: 100vh;
  background-color: white;
  animation: ${(props) =>
      props.toggleSideMenu === "open" ? slideRight : slideLeft}
    0.4s ease forwards;
  position: fixed;
  z-index: 11;
  left: 0;

  > :first-child {
    position: relative;
    left: -20px;
  }
  > :last-child {
    position: relative;
    top: -50px;
    left: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-weight: 900;
  }
  @media only screen and (min-width: 620px) {
    display: none;
  }
`;

const SideMenuNavlink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.text};
`;

export const SideMenu = ({ toggleSideMenu, setToggleSideMenu }) => {
  // default value of toggleSideMenu state is "none", so before changing the toggleSideMenu
  // state react wont get to the sidemenu code.
  return (
    toggleSideMenu !== "none" && (
      <>
        <SideMenuBackground toggleSideMenu={toggleSideMenu} />
        <SideMenuContainer toggleSideMenu={toggleSideMenu}>
          <CloseSVG
            onClick={() => setToggleSideMenu("close")}
            color="#69707D"
            transform="scale(0.8)"
          />
          <div className="sideMenu-navs">
            <SideMenuNavlink
              onClick={() => setToggleSideMenu("close")}
              to={HOME_PATH}
            >
              Collections
            </SideMenuNavlink>
            <SideMenuNavlink
              onClick={() => setToggleSideMenu("close")}
              to={MEN_PATH}
            >
              Men
            </SideMenuNavlink>
            <SideMenuNavlink
              onClick={() => setToggleSideMenu("close")}
              to={WOMEN_PATH}
            >
              Women
            </SideMenuNavlink>
          </div>
        </SideMenuContainer>
      </>
    )
  );
};
