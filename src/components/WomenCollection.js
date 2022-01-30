import styled from "styled-components";
import { products } from "../constants";
import { SingleProduct } from "../atoms";

const MainPageContainer = styled.div`
  width: 80vw;
  max-width: 80vw;
  position: absolute;
  left: 50%;
  gap: 5%;
  transform: translate(-50%, 0);
  top: 150px;

  display: flex;
  flex-wrap: wrap;
  gap: 50px 0;
  justify-content: space-evenly;
  padding-bottom: 50px;
  @media only screen and (max-width: 620px) {
    top: 80px;
  }
`;

export const WomenCollection = () => {
  // we show only those products that have gender : "female" in it
  return (
    <MainPageContainer>
      {products.map((p) => {
        if (p.gender === "female") return <SingleProduct key={p.id} data={p} />;
        return null;
      })}
    </MainPageContainer>
  );
};
