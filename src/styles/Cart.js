import styled from "styled-components";

export const CartWrapper = styled.div`
  width: 90%;
  margin: 50px auto;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

export const ItemPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  max-width: 200px;
  max-height: 200px;
`;

export const ItemName = styled.p`
  font-size: 18px;
  max-width: 350px;
  font-weight: bolder;
`;

export const ItemDesc = styled.p`
  font-size: 15px;
  max-width: 350px;
  font-weight: 500;
  font-style: italic;
`;

export const OrderBtn = styled.button`
  background-color: #5ece7b;
  width: 50%;
  height: 43px;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  border-style: none;
  border-radius: 8px;
  cursor: pointer;
  background: linear-gradient(315deg, #485461 0%, #28313b 74%);
  transform: translate(50%, 50%);
`;

export const CartTitle = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
`;

export const CartTotal = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
`;
