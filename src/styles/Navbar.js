import styled from "styled-components";

export const NavWrapper = styled.nav`
  width: 100vw;
  background-color: #eeeeee;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  position: relative;
  top: 0px;
  left: 0px;
  height: 70px;
`;

export const NavContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const NavBrandName = styled.h4`
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(315deg, #485461 0%, #28313b 74%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;

export const NavCartContainer = styled.div`
  display: flex;
  cursor: pointer;
  flex-dicretion: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

export const NavCartWheelsContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 7px;
  display: flex;
  justify-content: center;
  padding: 0px;
  margin: 0px;
  align-content: center;
`;
