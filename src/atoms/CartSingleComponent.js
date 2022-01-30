import styled from "styled-components";

const CartSingleProduct = styled.div`
  width: 85%;
  height: 30%;
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

export const CartSingleComponent = ({ data, setItems }) => {
  const a = Number(data.amount);
  const b = Number(data.price);
  const totalPrice = a * b;

  return (
    <CartSingleProduct>
      <img src={data.img} alt="product" />
      <div className="cartList-product-info">
        <p>{data.name}</p>
        <div>
          <p>
            ${data.price} x {data.amount}
            <strong> ${totalPrice}.00</strong>
          </p>
        </div>
      </div>
      <i
        onClick={() => setItems({})}
        className="delete-icon fas fa-trash-alt"
      ></i>
    </CartSingleProduct>
  );
};
