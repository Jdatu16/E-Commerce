import styled from "styled-components";
import { useState, useEffect } from "react";
import { products } from "../constants";
import { useParams } from "react-router-dom";
import { ProductPageLeftPart, ProductPageRightPart } from "../atoms";

const ProductPageContainer = styled.div`
  width: 80vw;
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translate(-50%, 0);

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
  }
`;

export const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    products.map((val) => {
      if (val.id !== Number(id)) return null;
      return setProduct(val);
    });
  }, [id]);

  return (
    <ProductPageContainer className="product-container">
      <ProductPageLeftPart product={product} />
      <ProductPageRightPart product={product} />
    </ProductPageContainer>
  );
};
