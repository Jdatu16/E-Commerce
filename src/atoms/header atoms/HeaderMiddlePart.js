import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { WOMEN_PATH, HOME_PATH, MEN_PATH } from "../../constants/paths";

const HeaderMiddle = styled.div`
  width: 60%;

  display: flex;
  justify-content: flex-start;
  gap: 30px;
  align-items: center;

  .nav-link {
    position: relative;
    padding: 40px 0;
    color: gray;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
    font-weight: 700;
  }
  .nav-active {
    color: black;
    border-bottom: solid 4px ${(props) => props.theme.orange};
    padding: 40px 0 36px 0;
  }

  @media only screen and (max-width: 800px) {
    gap: 10px;
    width: 40vw;
    .nav-link {
      font-size: 10px;
    }
  }
  @media only screen and (max-width: 620px) {
    display: none;
  }
`;

export const HeaderMiddlePart = () => {
  // by checking current location we determine which navlink should have
  // orange border-bottom
  const { pathname: location } = useLocation();

  return (
    <HeaderMiddle>
      <NavLink
        to={HOME_PATH}
        className={location === HOME_PATH ? "nav-link nav-active" : "nav-link"}
      >
        Collections
      </NavLink>
      <NavLink
        to={MEN_PATH}
        className={location === MEN_PATH ? "nav-link nav-active" : "nav-link"}
      >
        Men
      </NavLink>
      <NavLink
        to={WOMEN_PATH}
        className={location === WOMEN_PATH ? "nav-link nav-active" : "nav-link"}
      >
        Women
      </NavLink>
      <NavLink
        to="/"
        className={location === "about" ? "nav-link nav-active" : "nav-link"}
      >
        About
      </NavLink>
      <NavLink
        to="/"
        className={location === "contact" ? "nav-link nav-active" : "nav-link"}
      >
        Contact
      </NavLink>
    </HeaderMiddle>
  );
};
