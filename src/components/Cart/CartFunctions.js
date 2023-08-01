import animation from "react-animations/lib/swing";

import styled, { keyframes } from "styled-components";
export const fade = keyframes`
from {
  opacity:0
}

to {
  opacity:1
}
`;
export const Button = styled.button`
  padding: 8px 12px;
  color: #fff;
  background-color: #3b3e6e;
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: #2183a2;
  }
`;
export const CartContainer = styled.div`
  position: fixed;
  top: 105px;
  right: 0;
  z-index: 2;
  width: 300px;
  height: 100vh;
  padding: 60px 12px 0;
  background: #f3f2ee;
  overflow: scroll;
  transition: transform 0.2s ease-in-out;
  transform: translateX(${(p) => (p.visible ? 0 : "300px")});
`;
export const CartClearButton = styled(Button)`
  width: 100%;
  margin: 16px 0;
`;
export const CartItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 16px 0;
  border-bottom: 1px solid #ededed;
`;
export const CartProductImage = styled.img`
  width: 70px;
  height: 60px;
  margin-right: 8px;
  border: 1px solid #f6f6f6;
`;
export const CartProductTitle = styled.div`
  font-size: 16px;
`;
export const CartProductAction = styled.div`
  display: flex;
  grid-template-columns: 30px 40px 30px;
  grid-template-rows: 40px;
  align-items: center;
  padding: 8px 0 0;
  text-align: center;
`;
export const CartProductSubtotal = styled.div`
  margin-top: 4px;
  color: #666;
`;
export const ActionButton = styled(Button)`
  padding: 0;
  width: 30px;
  height: 30px;
  color: #222;
  background: #fff;
  border: 1px solid #efefef;
  opacity: ${(p) => (p.disabled ? 0.4 : 1)};
  pointer-events: ${(p) => (p.disabled ? "none" : "unset")};

  &:hover {
    background: #efefef;
  }
`;
export const CartProductQuantity = styled.div`
  height: 30px;
  line-height: 30px;
`;
export const CartTotal = styled.div`
  padding: 16px 0;
  font-size: 20px;
  text-align: right;
  font-weight: bold;
  color: black;
`;
// color: ${primaryColor};
export const Mask = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.75);

  animation: ${fade} 0.2s ease-in-out;
`;

export const EmptyCart = styled.div`
  font-weight: bold;
  padding: 36px;
  color: #2183a2;
  text-align: center;
`;

export const NavIconWrapper = styled.div`
  position: relative;
`;

export const Bubble = styled.div`
  position: absolute;
  top: -39%;
  right: -40%;
  padding: 2px 4px;
  height: 24px;
  font-size: 18px;
  line-height: 20px;
  text-align: center;

  border-radius: 2px;
  -webkit-animation: 1s;
  margin-top: 18%;
  margin-right: 42%;
  width: 7%;
  animation: 1s;

  border-radius: 2px;
  animation: ${(p) => (p.change ? styledAnimation : null)} 1s;
`;
// const Loading = styled.div`
//   padding: 20px;
//   text-align: center;
//   color: #888;
// `;
// const ProductsContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(1, 1fr);
//   gap: 40px 20px;
//   justify-content: center;
//   padding: 20px;

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
//   @media (min-width: 1024px) {
//     grid-template-columns: repeat(4, 1fr);
//   }
//   @media (min-width: 1280px) {
//     width: 1200px;
//     margin: 0 auto;
//     grid-template-columns: repeat(4, 1fr);
//   }
// `;
// const ProductContainer = styled.div`
//   display: grid;
//   grid-template-rows: auto 1fr 50px auto;
// `;
// const ProductImage = styled.img`
//   width: 100%;
//   height: auto;
//   border: 1px solid #efefef;
//   border-radius: 2px;
// `;
// const ProductTitle = styled.h1`
//   margin: 8px 0 4px;
//   font-size: 18px;
//   font-weight: 400;
//   color: #222;
// `;
// const Price = styled.p`
//   margin: 4px 0 12px;
//   font-size: 14px;
//   color: #666;
// `;

const styledAnimation = keyframes`${animation}`;
// background-color: ${primaryColor};
// background-color: blue;
