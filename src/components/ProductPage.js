import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../constants";
import { ProductPageLeftPart, ProductPageRightPart } from "../atoms";

const ProductPageContainer = styled(motion.div)`
  width: 80vw;
  position: absolute;
  top: 120px;
  left: calc(20vw / 2);

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 900px) {
    justify-content: space-between;
  }
  @media only screen and (max-width: 620px) {
    flex-direction: column;
    padding-bottom: 20px;
    top: 80px;
    width: 100vw;
    left: 0;
  }
`;

export const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;
    products.filter((val) => {
      if (val.id !== Number(id)) return null;
      if (isMounted) setProduct(val);
      return null;
    });
    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <ProductPageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <ProductPageLeftPart product={product} />
      <ProductPageRightPart product={product} />
    </ProductPageContainer>
  );
};
