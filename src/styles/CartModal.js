import styled from "styled-components";

export const CartModalWrapper = styled.div`
  position: absolute;
  height: auto;
  width: 325px;
  right: 30px;
  top: 65px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  z-index: 10;
  background: rgba(255, 255, 255, 0.192);
  backdrop-filter: blur(10px);
  border-radius: 10px;
`;

export const CartModalContainer = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px;
  max-height: 400px;
  overflow-y: auto;
`;

export const CartCountBadge = styled.p`
  position: absolute;
  width: 18px;
  height: 18px;
  right: -5px;
  bottom: -3px;
  text-align: center;
  padding-top: 2px;
  border-radius: 50%;
  background-color: #1d1f22;
  color: ${(props) => props.color};
  font-size: 12px;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 15px;
  margin-bottom: 40px;
`;

export const ItemPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  max-width: 100px;
  max-height: 100px;
`;

export const ItemName = styled.p`
  font-size: 12px;
  max-width: 90px;
`;

export const CheckoutBtn = styled.button`
  background-color: #5ece7b;
  width: 90%;
  height: 43px;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  border-style: none;
  border-radius: 8px;
  cursor: pointer;
  background: linear-gradient(315deg, #485461 0%, #28313b 74%);
  margin: 10px 15px;
`;
