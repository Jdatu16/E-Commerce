import styled from "styled-components";
import { motion } from "framer-motion";

const UserInfoContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px 0;

  div {
    width: 40%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 5px;
    p {
      position: relative;
    }
    input {
      background: rgb(222, 222, 222);
      background: linear-gradient(
        90deg,
        rgba(222, 222, 222, 1) 72%,
        rgba(236, 236, 236, 1) 100%
      );
      width: 100%;
      padding: 1rem 0.5rem;
      border: none;
      border-radius: 10px;
      &:focus {
        outline: none;
        box-shadow: 0px 0px 2px ${(props) => props.theme.orange};
      }
    }
  }
  @media only screen and (max-width: 620px) {
    flex-direction: column;
    flex-wrap: no-wrap;
    gap: 5px 0;
    div {
      width: 100%;
    }
  }
`;

export const CheckoutUserPart = ({ userInfo, setUserInfo, userInfoError }) => {
  return (
    <UserInfoContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
    >
      <div>
        {userInfoError.name !== "" && <p>{userInfoError.name}</p>}
        <input
          style={{ border: userInfoError.name ? "solid 1px red" : "none" }}
          type="text"
          value={userInfo.name}
          onChange={(e) =>
            setUserInfo((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
          placeholder="Name"
        />
      </div>
      <div>
        {userInfoError.adress && <p>{userInfoError.adress}</p>}
        <input
          style={{ border: userInfoError.adress ? "solid 1px red" : "none" }}
          type="text"
          value={userInfo.adress}
          onChange={(e) =>
            setUserInfo((prev) => {
              return { ...prev, adress: e.target.value };
            })
          }
          placeholder="Your Adress"
        />
      </div>
      <div>
        {userInfoError.phone && <p>{userInfoError.phone}</p>}
        <input
          style={{ border: userInfoError.phone ? "solid 1px red" : "none" }}
          type="text"
          value={userInfo.phone}
          onChange={(e) =>
            setUserInfo((prev) => {
              return { ...prev, phone: e.target.value };
            })
          }
          placeholder="Your Phone"
        />
      </div>
      <div>
        <input
          type="text"
          value={userInfo.comment}
          onChange={(e) =>
            setUserInfo((prev) => {
              return { ...prev, comment: e.target.value };
            })
          }
          placeholder="Comment (optional)"
        />
      </div>
    </UserInfoContainer>
  );
};
