import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { userInfoTemplate, HOME_PATH } from "../../constants";
import { motion } from "framer-motion";

const CheckoutDoneBg = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.664);
  z-index: 10;
`;
const CheckoutDoneText = styled(motion.div)`
  position: fixed;
  max-width: 260px;
  top: 30%;
  padding: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.orange};
  z-index: 11;

  p {
    color: ${(props) => props.theme.body};
  }
`;

export const CheckoutDonePart = ({
  userInfo,
  setUserInfo,
  setProgress,
  setItems,
}) => {
  const navigate = useNavigate();
  setTimeout(() => {
    setUserInfo(userInfoTemplate);
    setProgress("validation");
    setItems([]);
    navigate(HOME_PATH);
  }, 6000);
  return (
    <>
      <CheckoutDoneBg />
      <CheckoutDoneText initial={{ y: "-300px" }} animate={{ y: 0 }}>
        <p>
          Dear {userInfo.name}, Your order has been received. It will be
          delivered to your adress ( {userInfo.adress} ) shortly.
        </p>
      </CheckoutDoneText>
    </>
  );
};
