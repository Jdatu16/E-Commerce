import styled from "styled-components";
import { motion } from "framer-motion";
import { products } from "../constants";
import { SingleProduct } from "../atoms";

const MainPageContainer = styled(motion.div)`
  width: 80vw;
  max-width: 80vw;
  position: absolute;
  left: calc(20vw / 2);
  gap: 5%;
  top: 150px;

  display: flex;
  flex-wrap: wrap;
  gap: 50px 0;
  justify-content: space-evenly;
  padding-bottom: 50px;
  @media only screen and (max-width: 620px) {
    top: 80px;
  }
  @media only screen and (max-width: 420px) {
    width: 100%;
    gap: 10px 0;
  }
`;

export const WomenCollection = () => {
  // we show only those products that have gender : "female" in it
  return (
    <MainPageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      {products.map((p) => {
        if (p.gender === "female") return <SingleProduct key={p.id} data={p} />;
        return null;
      })}
    </MainPageContainer>
  );
};
