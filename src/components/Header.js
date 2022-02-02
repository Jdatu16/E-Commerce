import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import { HeaderLeftPart, HeaderMiddlePart, HeaderRightPart } from "../atoms";

const HeaderContainer = styled(motion.div)`
  width: 80vw;
  height: fit-content;
  background-color: ${(props) => props.theme.body};
  border-bottom: solid 1px rgba(128, 128, 128, 0.322);
  position: fixed;
  left: calc(20vw / 2);
  gap: 5%;
  /* transform: translate(-50%, 0); */
  z-index: 3;

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 620px) {
    padding: 20px 0;
    width: 95vw;
    left: calc(5vw / 2);
    border-bottom: none;
  }
`;

export const Header = () => {
  const { pathname: location } = useLocation();
  return (
    <HeaderContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <HeaderLeftPart />
      <HeaderMiddlePart location={location} />
      <HeaderRightPart location={location} />
    </HeaderContainer>
  );
};
