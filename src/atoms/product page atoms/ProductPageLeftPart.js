import { useState } from "react";
import styled from "styled-components";
import { PreviousSvg, NextSvg } from "../../svg";
import { swapImageHandler } from "../../tools";

const ProductPageLeftSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  .product-image {
    width: 380px;
    height: 380px;
    border-radius: 10px;
    @media only screen and (max-width: 900px) {
      width: 300px;
      height: 300px;
    }
    @media only screen and (max-width: 750px) {
      width: 250px;
      height: 250px;
    }
    @media only screen and (max-width: 620px) {
      width: 260px;
      height: 270px;
    }
  }
  > .previous-svg {
    position: relative;
    transform: scale(1);
    padding: 3px 6px;
    background-color: ${(props) => props.theme.body};
    border-radius: 50%;
    left: -130px;
    top: 169px;

    @media only screen and (min-width: 620px) {
      display: none;
    }
  }
  .next-svg {
    position: relative;
    transform: scale(1);
    padding: 3px 6px;
    background-color: ${(props) => props.theme.body};
    border-radius: 50%;
    right: -130px;
    top: -175px;

    @media only screen and (min-width: 620px) {
      display: none;
    }
  }
`;
const ProductPageThumbs = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
  @media only screen and (max-width: 750px) {
    gap: 10px;
  }
  @media only screen and (max-width: 620px) {
    display: none;
  }
`;
const ProductPageThumb = styled.div`
  border-radius: 10px;
  height: 77px;
  width: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  @media only screen and (max-width: 900px) {
    height: 57px;
    width: 54px;
  }
  @media only screen and (max-width: 750px) {
    height: 52px;
    width: 49px;
  }

  .product-thumb {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    cursor: pointer;
    @media only screen and (max-width: 900px) {
      height: 60px;
      width: 60px;
    }
    @media only screen and (max-width: 900px) {
      height: 55px;
      width: 55px;
    }
  }
  &.thumb-active {
    padding: 0;
    border: solid 3px ${(props) => props.theme.orange};
  }

  .thumb-seen {
    opacity: 0.4;
  }
`;

export const ProductPageLeftPart = ({ product }) => {
  // this state determines which image is shown. by default it shows first image
  const [imageToShow, setImageToShow] = useState(1);

  // this state is used to store data - if thumb has been clicked and which thumn(image)
  // is currently being shown/active
  const [thumbClicked, setThumbClicked] = useState({
    one: "seen",
    active: "one",
  });

  // this function uses imageToShow state to return image that is currently shown
  const changeImage = () => {
    if (imageToShow === 2) {
      return product.imageTwo;
    } else if (imageToShow === 3) {
      return product.imageThree;
    } else if (imageToShow === 4) {
      return product.imageFour;
    } else return product.imageOne;
  };

  return (
    <ProductPageLeftSide>
      <PreviousSvg
        stroke="#ff7e1b"
        onClick={() => swapImageHandler(setImageToShow, -1)}
        className="previous-svg"
      />

      <img className="product-image" src={changeImage()} alt="product" />

      <NextSvg
        onClick={() => swapImageHandler(setImageToShow, +1)}
        className="next-svg"
        stroke="#ff7e1b"
      />
      <ProductPageThumbs>
        <ProductPageThumb
          className={
            thumbClicked.active === "one" ? "thumb-active" : "thumb-wrapper"
          }
        >
          <img
            onClick={() => {
              setImageToShow(1);
              setThumbClicked((prev) => {
                return { ...prev, one: "seen", active: "one" };
              });
            }}
            className={
              thumbClicked.one === "seen"
                ? "product-thumb thumb-seen"
                : "product-thumb"
            }
            src={product.imageThumbOne}
            alt="product thumbnail"
          />
        </ProductPageThumb>
        <ProductPageThumb
          className={
            thumbClicked.active === "two"
              ? "thumb-wrapper  thumb-active"
              : "thumb-wrapper"
          }
        >
          <img
            onClick={() => {
              setImageToShow(2);
              setThumbClicked((prev) => {
                return { ...prev, two: "seen", active: "two" };
              });
            }}
            className={
              thumbClicked.two === "seen"
                ? "product-thumb thumb-seen"
                : "product-thumb"
            }
            src={product.imageThumbTwo}
            alt="product thumbnail"
          />
        </ProductPageThumb>
        <ProductPageThumb
          className={
            thumbClicked.active === "three"
              ? "thumb-wrapper  thumb-active"
              : "thumb-wrapper"
          }
        >
          <img
            onClick={() => {
              setImageToShow(3);
              setThumbClicked((prev) => {
                return { ...prev, three: "seen", active: "three" };
              });
            }}
            className={
              thumbClicked.three === "seen"
                ? "product-thumb thumb-seen"
                : "product-thumb"
            }
            src={product.imageThumbThree}
            alt="product thumbnail"
          />
        </ProductPageThumb>
        <ProductPageThumb
          className={
            thumbClicked.active === "four"
              ? "thumb-wrapper  thumb-active"
              : "thumb-wrapper"
          }
        >
          <img
            onClick={() => {
              setImageToShow(4);
              setThumbClicked((prev) => {
                return { ...prev, four: "seen", active: "four" };
              });
            }}
            className={
              thumbClicked.four === "seen"
                ? "product-thumb thumb-seen"
                : "product-thumb"
            }
            src={product.imageThumbFour}
            alt="product thumbnail"
          />
        </ProductPageThumb>
      </ProductPageThumbs>
    </ProductPageLeftSide>
  );
};
