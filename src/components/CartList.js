import styled, { keyframes } from "styled-components";
import { CartSingleComponent } from "../atoms";

// cart open animation
const cartAppear = keyframes`
  0% {
    opacity: 0;
    height: 0;
  }
  100% {
    opacity: 1;
    min-height: 200px;
  }
`;
// cart close animation
const cartDisappear = keyframes`
  0% {
    opacity: 1;
    min-height: 200px;
  }
  100% {
    opacity: 0;
    height: 0;
  }
`;

const CartContainer = styled.div`
  width: 300px;
  height:200px
  max-height: 400px;
  background-color: rgb(236, 236, 236);
  border-radius: 10px;
  box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.178);
  position: absolute;
  right: 10%;
  top: 90px;
  padding-bottom:10px;
  animation: ${(props) =>
    props.toggleCart === "open" ? cartAppear : cartDisappear}
    0.5s ease forwards;
`;

const CartHeader = styled.p`
  max-width: 100%;
  border-bottom: solid 1px rgba(128, 128, 128, 0.322);
  padding: 20px 0 20px 20px;
  font-weight: 900;
  font-size: 13px;
`;

const CartContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;

  font-weight: 900;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: gray;
`;
const CheckoutButton = styled.button`
  background-color: ${(props) => props.theme.orange};
  border: none;
  border-radius: 10px;
  color: rgb(236, 236, 236);
  font-weight: 700;
  cursor: pointer;
  width: 85%;
  height: 30px;
`;

export const CartList = ({ toggleCart, items, setItems }) => {
  // default value of toggleCart state is "none", so before changing the toggleSideMenu
  // state react wont get to the cart code.

  return (
    toggleCart !== "none" && (
      <CartContainer toggleCart={toggleCart}>
        <CartHeader>Cart</CartHeader>
        {items.length > 0 ? (
          <CartContentWrapper className="cartList-list-wrapper">
            {items.map((i) => {
              return (
                <CartSingleComponent
                  key={i.id}
                  data={i}
                  items={items}
                  setItems={setItems}
                />
              );
            })}
            <CheckoutButton>Checkout</CheckoutButton>
          </CartContentWrapper>
        ) : (
          <CartContentWrapper>Your cart is empty.</CartContentWrapper>
        )}
      </CartContainer>
    )
  );
};
