import styled from "styled-components";

export const CardModalWrapper = styled.div`
  width: 60%;
  height: 90%;
  max-width: 100%;
  max-height: 100%;
  background: #eee;
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  @media (max-width: 500px) {
    height: auto;
  }
`;

export const CardModalPhotoContainer = styled.div`
  position: relative;
  width: 100%;
  top: 0px;
  left: 0px;
`;

export const CardModalPhoto = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: auto;
  max-height: 300px;
`;

export const CardModalItemName = styled.h2`
  font-weight: 800;
  text-align: center;
`;

export const CardModalItemDesc = styled.p`
  font-weight: 500;
  text-align: center;
  font-style: italic;
  max-width: 90%;
  margin: 0 auto;
`;

export const CardModalItemRev = styled.p`
  font-weight: 500;
  text-align: center;
  font-size: 18px;
`;

export const CardModalArrowsContainer = styled.div`
  position: absolute;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 50%;
  left: 35px;

  @media (max-width: 500px) {
    top: 50%;
    left: 15px;
  }
`;

export const CardModalArrow = styled.img`
  padding: 10px;
  background-color: black;
  border-radius: 10px;
  cursor: pointer;
`;
