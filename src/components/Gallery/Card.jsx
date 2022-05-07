import React, { useState } from "react";
import {
  CardWrapper,
  MainPhoto,
  ProductName,
  MainPhotoContainer,
  ProductPrice,
  CartAddButton,
  CartLogoBtn,
  WheelsContainer,
} from "../../styles/Card";
import Cart from "../../assets/cart.png";
import wheel from "../../assets/wheel.png";
import { useDispatch } from "react-redux";
import CardModal from "./CardModal";

export default function Card({
  name,
  price,
  images,
  mainPhoto,
  rate,
  desc,
  reviewsNbr,
}) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleAddItem = (e) => {
    const cartItem = {
      mainPhoto,
      name,
      price,
      images,
      rate,
      desc,
      length: 1,
      count: 1,
      reviewsNbr,
    };
    const addItem = { type: "addItemAction", payload: cartItem };
    dispatch(addItem);
  };

  const handleModal = (e) => {
    setShowModal(true);
  };
  return (
    <>
      {showModal && (
        <CardModal
          setOpen={setShowModal}
          name={name}
          price={price}
          images={images}
          mainPhoto={mainPhoto}
          rate={rate}
          desc={desc}
          reviewsNbr={reviewsNbr}
        />
      )}
      <CardWrapper>
        {/**
         * Clicking on the mainPhoto will trigger the modal
         */}
        <MainPhotoContainer onClick={() => handleModal()}>
          <MainPhoto src={mainPhoto} alt="PRODUCT" />
        </MainPhotoContainer>
        <div style={{ textAlign: "center" }}>
          <ProductName>{name}</ProductName>
          <ProductPrice>Price: {price}</ProductPrice>
        </div>
        <CartAddButton onClick={() => handleAddItem()}>
          <CartLogoBtn src={Cart} />
          <WheelsContainer>
            <img src={wheel} alt="CART WHEEL" style={{ marginInlineEnd: 2 }} />
            <img src={wheel} alt="CART WHEEL" />
          </WheelsContainer>
        </CartAddButton>
      </CardWrapper>
    </>
  );
}
