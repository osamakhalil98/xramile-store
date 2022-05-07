import React, { useEffect, useState } from "react";
import NavBar from "../Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  CartWrapper,
  ItemContainer,
  ItemPhoto,
  ItemName,
  OrderBtn,
  ItemDesc,
  CartTitle,
  CartTotal,
} from "../../styles/Cart";
import toast, { Toaster } from "react-hot-toast";

export default function Cart() {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  let TOTAL = 0;
  const cartItems = useSelector((state) => state.cartItemReducer.cartItems);
  const itemsLength = useSelector((state) => state.cartItemReducer.length);
  const totalCalc = () => {
    cartItems.forEach((item) => {
      TOTAL = TOTAL + Number(item.price);
    });
  };

  const clearItems = () => {
    toast.success("Your Order On Its way!");
    const removeItems = { type: "removeItemsAction" };
    setTimeout(() => {
      dispatch(removeItems);
    }, 1000);
  };

  useEffect(() => {
    totalCalc();
    setTotal(TOTAL);
  }, [total]);

  return (
    <>
      <NavBar />
      <CartWrapper>
        <CartTitle>
          {itemsLength === 0 ? "No Items Added" : `items : ${itemsLength}`}{" "}
        </CartTitle>
        {cartItems.map((item, idx) => (
          <ItemContainer key={idx}>
            <ItemPhoto src={item.mainPhoto} alt="PRODUCT MINI PHOTO" />
            <div>
              <ItemName>{item.name}</ItemName>
              <ItemDesc>{item.desc}</ItemDesc>
            </div>

            <ItemName>{item.price}</ItemName>
          </ItemContainer>
        ))}

        {itemsLength === 0 ? (
          ""
        ) : (
          <>
            <CartTotal>Total : {total}</CartTotal>{" "}
            <OrderBtn onClick={() => clearItems()}>Order</OrderBtn>
            <Toaster />
          </>
        )}
      </CartWrapper>
    </>
  );
}
