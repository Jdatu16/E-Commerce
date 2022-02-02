import styled from "styled-components";
import { SingleOrder } from "./SingleOrder";
import { motion } from "framer-motion";

const OrderInfoContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px 0;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const CheckoutOrderPart = ({ items }) => {
  return (
    <OrderInfoContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
    >
      {items.map((i) => {
        return <SingleOrder key={i.id} data={i} />;
      })}
    </OrderInfoContainer>
  );
};
