import { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { StateContext } from "../App";
import { deleteItemHandler } from "../tools";

const CartSingleProduct = styled(motion.div)`
  width: 85%;
  height: 30%;
  max-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  img {
    width: 42px;
    border-radius: 5px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    > p {
      word-spacing: 4px;
      color: gray;
      font-size: 14px;
      > strong {
        color: black;
        font-weight: 900;
      }
    }
  }
`;

export const CartSingleComponent = ({ data }) => {
  const { items, setItems } = useContext(StateContext);
  const a = Number(data.amount);
  const b = Number(data.price);
  const totalPrice = a * b;

  return (
    <CartSingleProduct
      key={data.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img src={data.img} alt="product" />
      <div>
        <p>{data.name}</p>
        <div>
          <p>
            ${data.price} x {data.amount}
            <strong> ${totalPrice}.00</strong>
          </p>
        </div>
      </div>
      <i
        style={{ cursor: "pointer" }}
        onClick={() => deleteItemHandler(data.id, items, setItems)}
        className="fas fa-trash-alt"
      ></i>
    </CartSingleProduct>
  );
};
