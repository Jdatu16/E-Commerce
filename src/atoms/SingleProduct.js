import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SingleProductContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-radius: 10px;
  transition: 0.3s ease;
  cursor: pointer;
  gap: 10px 0;
  @media only screen and (max-width: 1051px) {
    width: 50%;
  }
  @media only screen and (max-width: 420px) {
    width: 100%;
  }

  &:hover {
    box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.178);
  }
`;

const SingleProductTitle = styled.h3`
  font-weight: 700;
  font-size: 1rem;
  max-width: 80%;
  @media only screen and (max-width: 810px) {
    height: 50px;
  }
`;
const SingleProductImage = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 10px;
`;

const SingleProductPrice = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 10px;
  > :last-child {
    text-decoration: line-through;
    color: gray;
  }
  > :first-child {
    color: ${(props) => props.theme.orange};
  }
`;

const SingleProductDiscount = styled.span`
  position: relative;
  top: 0px;
  right: -40%;
  border-radius: 10px;
  padding: 2px 5px;
  font-size: 0.9rem;
  background-color: ${(props) => props.theme.orange};
  color: ${(props) => props.theme.body};
`;

export const SingleProduct = ({ data }) => {
  // hover state is used to change product image
  const [hover, setHover] = useState(false);
  // this is single product data passed down from the parent component
  const { id, name, imageOne, imageTwo, price, discount, oldPrice } = data;

  const navigate = useNavigate();

  const navigateHandler = (id) => {
    navigate(`/collection/product/${id}`);
  };

  return (
    <SingleProductContainer
      onClick={() => navigateHandler(id)}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      key={id}
    >
      <SingleProductDiscount>{discount}</SingleProductDiscount>
      <SingleProductImage
        src={hover ? imageOne : imageTwo}
      ></SingleProductImage>
      <SingleProductTitle>{name}</SingleProductTitle>
      <SingleProductPrice>
        <span>{price}</span> <span>{oldPrice}</span>
      </SingleProductPrice>
    </SingleProductContainer>
  );
};
