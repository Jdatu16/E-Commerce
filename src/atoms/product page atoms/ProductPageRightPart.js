import { useContext, useState } from "react";
import styled from "styled-components";
import { CartSVG } from "../../svg";
import { StateContext } from "../../App";
import { productAmountHandler } from "../../tools";

const ProductPageRightSide = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 25px;
  @media only screen and (max-width: 900px) {
    gap: 15px;
  }
  @media only screen and (max-width: 620px) {
    width: 100%;
    gap: 10px;
    max-width: 240px;
  }
`;

const ProductPageCompanyName = styled.h3`
  letter-spacing: 1px;
  font-weight: 900;
  color: ${(props) => props.theme.orange};
  font-size: 12px;

  @media only screen and (max-width: 900px) {
    font-size: 10px;
  }
  @media only screen and (max-width: 620px) {
    font-size: 8px;
  }
`;

const ProductPageProductName = styled.h1`
  font-size: 40px;
  font-weight: 900;
  @media only screen and (max-width: 900px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 620px) {
    font-size: 20px;
  }
`;

const ProductPageProductDescription = styled.p`
  color: gray;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  @media only screen and (max-width: 900px) {
    font-size: 11px;
    line-height: 15px;
  }
  @media only screen and (max-width: 620px) {
    font-size: 9px;
    line-height: 12px;
  }
`;

const ProductPageProductPrices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media only screen and (max-width: 620px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  > h3 {
    font-size: 25px;
    font-weight: 900;
    @media only screen and (max-width: 900px) {
      font-size: 15px;
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    > h3 {
      font-size: 25px;
      font-weight: 900;
      @media only screen and (max-width: 900px) {
        font-size: 15px;
      }
    }
    > p {
      background-color: #df753c28;
      color: ${(props) => props.theme.orange};
      font-weight: 900;
      font-size: 15px;
      padding: 2px 5px;
      border-radius: 5px;
      @media only screen and (max-width: 900px) {
        font-size: 10px;
      }
      @media only screen and (max-width: 620px) {
        padding: 1px 4px;
        font-size: 9px;
      }
    }
  }
  > p {
    opacity: 0.4;
    font-weight: 900;
    font-size: 15px;
    text-decoration: line-through;
    @media only screen and (max-width: 900px) {
      font-size: 10px;
    }
  }
`;

const ProductPageAddProduct = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  @media only screen and (max-width: 620px) {
    flex-direction: column;
  }
  > div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    background-color: #f7f8fd;
    width: 30%;
    padding: 15px 0;
    @media only screen and (max-width: 900px) {
      font-size: 10px;
      padding: 10px 0;
    }
    @media only screen and (max-width: 620px) {
      width: 100%;
      padding: 15px 0;
    }
  }
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${(props) => props.theme.orange};
    font-weight: 700;
    color: rgb(236, 236, 236);
    padding: 15px 0;
    width: 50%;
    cursor: pointer;
    gap: 10px;
    box-shadow: 0px 20px 20px rgba(255, 166, 0, 0.192);
    border: none;
    @media only screen and (max-width: 900px) {
      font-size: 10px;
      padding: 10px 0;
      .cart {
        transform: scale(0.6);
      }
    }
    @media only screen and (max-width: 620px) {
      width: 100%;
      padding: 15px 0;
      font-size: 13px;
      .cart {
        transform: scale(0.8);
      }
    }
  }
`;

export const ProductPageRightPart = ({ product }) => {
  const [productAmount, setProductAmount] = useState(0);
  const { setItems } = useContext(StateContext);

  return (
    <ProductPageRightSide>
      <ProductPageCompanyName>{product.company}</ProductPageCompanyName>
      <ProductPageProductName>{product.name}</ProductPageProductName>
      <ProductPageProductDescription>
        {product.description}
      </ProductPageProductDescription>
      {product.discount ? (
        <ProductPageProductPrices>
          <div>
            <h3>${product.price}</h3>
            <p>{product.discount}</p>
          </div>
          <p>${product.oldPrice}</p>
        </ProductPageProductPrices>
      ) : (
        <h3>{product.price}</h3>
      )}
      <ProductPageAddProduct>
        <div>
          <i
            onClick={() => productAmountHandler(setProductAmount, -1)}
            style={{ color: "#ff7e1b", cursor: "pointer" }}
            className="fas fa-minus"
          ></i>
          <p>{productAmount}</p>
          <i
            onClick={() => productAmountHandler(setProductAmount, +1)}
            style={{ color: "#ff7e1b", cursor: "pointer" }}
            className="fas fa-plus"
          ></i>
        </div>
        <button
          onClick={() => {
            if (productAmount === 0) return null;
            setItems((prev) => {
              console.log(prev);
              return [
                ...prev,
                {
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  amount: productAmount,
                  img: product.imageOne,
                },
              ];
            });
          }}
        >
          <CartSVG
            width={22}
            height={20}
            transform="scale(0.9)"
            fill="#ececec"
            className="cart"
          />
          <p>Add to cart</p>
        </button>
      </ProductPageAddProduct>
    </ProductPageRightSide>
  );
};
