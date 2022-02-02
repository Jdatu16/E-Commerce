import { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../../App";
import { deleteItemHandler } from "../../tools";
import { editItemAmountHandler } from "../../tools";

const SingleOrderContainer = styled.div`
  width: 40%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  img {
    width: 80px;
    border-radius: 5px;
  }
  .product-info {
    display: flex;
    width: 40%;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    > p {
      word-spacing: 4px;
      color: gray;
      font-size: 14px;
      > strong {
        color: black;
        font-weight: 700;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    max-width: 500px;
  }
`;

export const SingleOrder = ({ data }) => {
  const { items, setItems } = useContext(StateContext);
  const a = data.amount;
  const b = Number(data.price);
  const totalPrice = a * b;

  return (
    <SingleOrderContainer>
      <img src={data.img} alt="product" />
      <div className="product-info">
        <p>{data.name}</p>
        <div>
          <p>
            ${data.price} x {data.amount}
            <strong> ${totalPrice}.00</strong>
          </p>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <i
          onClick={() => {
            editItemAmountHandler(items, data, +1, setItems);
          }}
          style={{ color: "#ff7e1b", cursor: "pointer" }}
          className="fas fa-plus"
        />
        <i
          style={{ cursor: "pointer", color: "red" }}
          onClick={() => deleteItemHandler(data.id, items, -1, setItems)}
          className="fas fa-trash-alt"
        />
        <i
          onClick={() => {
            editItemAmountHandler(items, data, -1, setItems);
          }}
          style={{ color: "#ff7e1b", cursor: "pointer" }}
          className="fas fa-minus"
        />
      </div>
    </SingleOrderContainer>
  );
};
