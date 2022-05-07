import React, { useRef, useEffect, useState } from "react";
import {
  CardModalWrapper,
  CardModalPhotoContainer,
  CardModalPhoto,
  CardModalItemName,
  CardModalItemDesc,
  CardModalItemRev,
  CardModalArrow,
  CardModalArrowsContainer,
} from "../../styles/CardModal";
import useOutisdeClicker from "../../Hooks/useOutsideClicker";
import { Rating } from "@mui/material";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";

export default function CardModal({
  setOpen,
  name,
  price,
  images,
  rate,
  desc,
  reviewsNbr,
}) {
  const modalRef = useRef();
  const isClicked = useOutisdeClicker(modalRef);
  const [currentIndex, setCurrentIndex] = useState(0);

  // simple logic of moving images left and right
  //(ALWAYS ON LOOP BOTH WAYS APPROACH IMPLEMENTED)
  const moveImages = (type, index) => {
    if (type === "right") {
      if (index === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(index + 1);
      }
    }
    if (type === "left") {
      if (index === 0) {
        setCurrentIndex(images.length - 1);
      } else {
        setCurrentIndex(index - 1);
      }
    }
  };

  useEffect(() => {
    if (isClicked) {
      setOpen(false);
    }
  }, [isClicked, modalRef, setOpen]);
  return (
    <CardModalWrapper ref={modalRef}>
      <CardModalPhotoContainer>
        <CardModalPhoto src={images[currentIndex]} alt="PRODUCT SLIDER" />
        <CardModalArrowsContainer>
          <CardModalArrow
            src={leftArrow}
            alt="LEFT ARROW"
            onClick={() => moveImages("left", currentIndex)}
          />
          <CardModalArrow
            src={rightArrow}
            alt="RIGHT ARROW"
            onClick={() => moveImages("right", currentIndex)}
          />
        </CardModalArrowsContainer>
      </CardModalPhotoContainer>
      <CardModalItemName>{name}</CardModalItemName>
      <CardModalItemName>Price : {price}</CardModalItemName>
      <CardModalItemDesc>{desc}</CardModalItemDesc>
      {/**
       * Rating styled with MUI Rating component
       */}
      <CardModalItemRev>
        <Rating
          name="size-small"
          defaultValue={Number(rate)}
          size="large"
          precision={0.5}
          disabled={true}
        />
      </CardModalItemRev>
      <CardModalItemRev>Number Of Reviews : {reviewsNbr}</CardModalItemRev>
    </CardModalWrapper>
  );
}
