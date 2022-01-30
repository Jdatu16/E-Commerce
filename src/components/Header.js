import styled from "styled-components";

import { HeaderLeftPart, HeaderMiddlePart, HeaderRightPart } from "../atoms";

const HeaderContainer = styled.div`
  width: 80vw;
  height: fit-content;
  border-bottom: solid 1px rgba(128, 128, 128, 0.322);
  position: absolute;
  left: 50%;
  gap: 5%;
  transform: translate(-50%, 0);

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 620px) {
    padding: 20px 0;
    width: 95vw;
    border-bottom: none;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeftPart />
      <HeaderMiddlePart />
      <HeaderRightPart />
    </HeaderContainer>
  );
};
