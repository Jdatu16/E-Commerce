import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckoutUserPart,
  CheckoutOrderPart,
  CheckoutDonePart,
} from "../atoms";
import { userInfoTemplate } from "../constants";
import { checkoutValidationHandler } from "../tools";

const CheckoutContainer = styled(motion.div)`
  width: 80vw;
  max-width: 80vw;
  position: absolute;
  left: calc(20vw / 2);
  top: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const CheckoutButton = styled(motion.button)`
  background-color: ${(props) => props.theme.orange};
  border: none;
  border-radius: 10px;
  color: rgb(236, 236, 236);
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  max-width: 270px;
  height: 40px;
`;

const CheckoutButtonDone = styled(motion.button)`
  background-color: ${(props) => props.theme.orange};
  border: none;
  border-radius: 10px;
  color: rgb(236, 236, 236);
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  max-width: 270px;
  height: 40px;
`;
export const CheckoutPage = ({ items, setItems, totalSum }) => {
  // this state stores user information (name, adress...)
  const [userInfo, setUserInfo] = useState(userInfoTemplate);
  //   this state is used for user info validation
  const [userInfoError, setUserInfoError] = useState(userInfoTemplate);
  //   this state stores checkout progress
  const [progress, setProgress] = useState("validation");

  return (
    <CheckoutContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {progress === "validation" ? (
        <CheckoutUserPart
          userInfo={userInfo}
          userInfoError={userInfoError}
          setUserInfo={setUserInfo}
        />
      ) : (
        <CheckoutOrderPart
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          items={items}
          setItems={setItems}
        />
      )}
      {progress === "done" && (
        <CheckoutDonePart
          setProgress={setProgress}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setItems={setItems}
        />
      )}

      {progress === "validation" ? (
        <CheckoutButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          onClick={() =>
            checkoutValidationHandler(
              progress,
              setUserInfoError,
              userInfo,
              setProgress
            )
          }
        >
          Continue
        </CheckoutButton>
      ) : (
        <CheckoutButtonDone
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          onClick={() => setProgress("done")}
        >
          ${totalSum} Order
        </CheckoutButtonDone>
      )}
    </CheckoutContainer>
  );
};
