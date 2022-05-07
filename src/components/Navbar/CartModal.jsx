import React, { useRef, useEffect } from "react";
import {
  CartModalWrapper,
  CartModalContainer,
  ItemContainer,
  ItemPhoto,
  ItemName,
  CheckoutBtn,
} from "../../styles/CartModal";
import useOutisdeClicker from "../../Hooks/useOutsideClicker";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CartModal({ setOpen }) {
  const navigate = useNavigate();

  const modalRef = useRef();
  const isClicked = useOutisdeClicker(modalRef);

  const cartItems = useSelector((state) => state.cartItemReducer.cartItems);
  const itemsLength = useSelector((state) => state.cartItemReducer.length);

  useEffect(() => {
    if (isClicked) {
      // make sure the showModal toggle first then execute this setState
      setTimeout(() => {
        setOpen(false);
      }, 20);
    }
  }, [isClicked, modalRef, setOpen]);

  return (
    <CartModalWrapper ref={modalRef}>
      <CartModalContainer>
        <p style={{ textAlign: "center" }}>
          {itemsLength === 0 ? "No Items Added" : `items : ${itemsLength}`}{" "}
        </p>
        {cartItems.map((item, idx) => (
          <ItemContainer key={idx}>
            <ItemPhoto src={item.mainPhoto} alt="PRODUCT MINI PHOTO" />
            <ItemName>{item.name}</ItemName>
            <ItemName>{item.price}</ItemName>
          </ItemContainer>
        ))}
      </CartModalContainer>
      {itemsLength === 0 ? (
        ""
      ) : (
        <CheckoutBtn onClick={() => navigate("/cart")}>Checkout</CheckoutBtn>
      )}
    </CartModalWrapper>
  );
}
