import styled from "styled-components";

export const CartAddButton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 20px;
  bottom: 120px;
  margin: 0px 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: none;
  cursor: pointer;
  z-index: 2;
  border:1px; solid orange
`;

export const CardWrapper = styled.div`
  cursor: pointer;
  width: 350px;
  height: 350px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  background: rgba(255, 255, 255, 0.192);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  overflow: hidden;
  align-items: flex-start;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  margin-bottom: 20px;

  &:hover {
    ${CartAddButton} {
      display: block;
    }
  }
`;

export const MainPhotoContainer = styled.div`
  margin: 0px;
  position: relative;
`;

export const MainPhoto = styled.img`
  width: 350px;
  height: 200px;
  max-height: 250px;
  object-fit: cover;
  image-rendering: optimizeQuality;
  margin-top: 0px;
  padding: 0px;
`;
export const ProductName = styled.h4`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  color: black;
`;

export const ProductPrice = styled.p`
  font-weight: 800;
  font-size: 18px;
`;

export const CartLogoBtn = styled.img`
  position: absolute;
  top: 20px;
  left: 17px;
`;

export const WheelsContainer = styled.div`
  position: absolute;
  top: 33px;
  left: 24px;
  display: flex;
  justify-content: space-between;
`;
