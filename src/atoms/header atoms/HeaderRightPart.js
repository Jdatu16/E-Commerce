import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { StateContext } from "../../App";
import avatar from "../../images/image-avatar.png";
import { CartSVG } from "../../svg/";

const HeaderRight = styled.div`
  width: 20%;

  display: flex;
  justify-content: flex-end;
  gap: 30px;
  align-items: center;
  .avatar {
    width: 40px;
    padding: 3px;
    cursor: pointer;
  }

  .avatar-active {
    border: 3px solid ${(props) => props.theme.orange};
    padding: 0;
    border-radius: 50%;
  }
  @media only screen and (max-width: 800px) {
    width: 30vw;
  }
  @media only screen and (max-width: 620px) {
    width: 50vw;
    gap: 10px;
  }
`;

const CartItemCount = styled(motion.p)`
  position: absolute;
  right: 60px;
  top: 30px;
  height: 10px;
  background-color: ${(props) => props.theme.orange};
  padding: 1px 6px;
  border-radius: 40%;
  font-size: 9px;
  color: white;
  @media only screen and (max-width: 620px) {
    right: 45px;
    top: 25px;
  }
`;

export const HeaderRightPart = ({ location }) => {
  // this state stores amount of all the products user adds to the cart
  const [itemCount, setItemCount] = useState(0);
  // if this app was actuall website then toggleProfile state
  // would be used to show profile info, but right now it just adds
  // orange border to mock avatar
  const [toggleProfile, setToggleProfile] = useState(false);
  const { items, setToggleCart } = useContext(StateContext);

  useEffect(() => {
    setItemCount(0);
    items.map((v) => {
      return setItemCount((prev) => prev + Number(v.amount));
    });
  }, [items]);
  return (
    <HeaderRight>
      {location !== "/checkout" && (
        <CartSVG
          style={{ cursor: "pointer" }}
          onClick={() =>
            setToggleCart((prev) => {
              if (prev !== "open") return "open";
              return "close";
            })
          }
          width={22}
          height={20}
          fill="#69707D"
        />
      )}
      {items.length > 0 && location !== "/checkout" && (
        <CartItemCount initial={{ scale: 0 }} animate={{ scale: 1 }}>
          {itemCount}
        </CartItemCount>
      )}
      <img
        onClick={() => setToggleProfile((prev) => !prev)}
        className={toggleProfile ? "avatar-active avatar" : "avatar"}
        src={avatar}
        alt="user avatar"
      />
    </HeaderRight>
  );
};
