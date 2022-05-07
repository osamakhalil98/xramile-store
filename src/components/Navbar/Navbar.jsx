import React, { useState } from "react";
import {
  NavWrapper,
  NavContainer,
  NavBrandName,
  NavCartContainer,
  NavCartWheelsContainer,
} from "../../styles/Navbar";
import { CartCountBadge } from "../../styles/CartModal";
import wheel from "../../assets/wheel.png";
import cart from "../../assets/cart.png";
import CartModal from "./CartModal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [ModalOpen, setModalOpen] = useState(false);
  const cartItems = useSelector((state) => state.cartItemReducer.cartItems);

  const BRAND_NAME = "E-STORE";

  return (
    <NavWrapper>
      <NavContainer>
        <NavBrandName onClick={() => navigate("/")}>{BRAND_NAME}</NavBrandName>
        <NavCartContainer onClick={() => setModalOpen(!ModalOpen)}>
          {cartItems.length === 0 ? (
            ""
          ) : (
            <CartCountBadge color="white">{cartItems.length}</CartCountBadge>
          )}
          <div>
            <img src={cart} alt="CART" />
          </div>
          <NavCartWheelsContainer>
            <div style={{ marginInlineEnd: 2, padding: 0 }}>
              <img src={wheel} alt="CART WHEEL 1" />
            </div>
            <div>
              <img src={wheel} alt="CART WHEEL 2" />
            </div>
          </NavCartWheelsContainer>
        </NavCartContainer>
      </NavContainer>
      {ModalOpen === true ? <CartModal setOpen={setModalOpen} /> : ""}
    </NavWrapper>
  );
}
