import styled from "styled-components";
import { CartSingleComponent } from "../atoms";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CHECKOUT_PATH } from "../constants";

const CartContainer = styled(motion.div)`
  width: 300px;
  height: ${(props) =>
    props.length === 3 ? "355px" : props.length === 4 ? "435px" : "230px"};
  background-color: rgb(236, 236, 236);
  border-radius: 10px;
  box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.178);
  position: fixed;
  z-index: 5;
  right: calc(20vw / 2);
  top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media only screen and (max-width: 620px) {
    right: calc((100vw - 300px) / 2);
  }
  @media only screen and (max-width: 310px) {
    width: 270px;
    right: calc((100vw - 270px) / 2);
  }
`;

const CartHeader = styled.p`
  max-width: 100%;
  height: 60px;
  border-bottom: solid 1px rgba(128, 128, 128, 0.322);
  padding: 0 0 0 20px;
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 13px;
`;

const CartContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.length > 2
      ? "flex-start"
      : props.length === 2
      ? "flex-start"
      : "space-evenly"};
  align-items: center;
  gap: 10px;

  padding: 10px 0;
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
  height: 40px;
`;

export const CartList = ({
  toggleCart,
  items,
  setItems,
  setToggleCart,
  totalSum,
}) => {
  // this state stores total price of all the items that are in the cart

  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate(CHECKOUT_PATH);
    setToggleCart("close");
  };

  // default value of toggleCart state is "none", so before changing the toggleSideMenu
  // state react wont get to the cart code.

  return (
    <AnimatePresence>
      {toggleCart === "open" && (
        <CartContainer
          length={items.length}
          initial={{ height: 0 }}
          animate={{
            height:
              items.length === 3
                ? "355px"
                : items.length === 4
                ? "435px"
                : "230px",
            transition: { type: "tween", duration: 0.1 },
          }}
          exit={{
            height: 0,
            opacity: 0,
            transition: { type: "tween", duration: 0.1 },
          }}
        >
          <CartHeader>Cart</CartHeader>
          {items.length > 0 ? (
            <CartContentWrapper length={items.length}>
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
              <CheckoutButton onClick={() => checkoutHandler()}>
                Checkout {totalSum}$
              </CheckoutButton>
            </CartContentWrapper>
          ) : (
            <CartContentWrapper>Your cart is empty.</CartContentWrapper>
          )}
        </CartContainer>
      )}
    </AnimatePresence>
  );
};
