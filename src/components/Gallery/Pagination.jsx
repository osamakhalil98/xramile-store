import React, { useEffect } from "react";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";
import { CardModalArrow } from "../../styles/CardModal";
import { PaginationNumber, PaginationWrapper } from "../../styles/Grid";

export default function Pagination({
  prodNbr,
  setPageNumber,
  pageNumber,
  prods,
  setPaginated,
}) {
  useEffect(() => {
    let paginatedProd = [...prods].splice(0, prodNbr);
    setPaginated(paginatedProd);
  }, []);

  // simple logic to handle clinet-side pagination
  // (MODIFYING THE ORIGINAL STATE WHICH IS PASSED FROM PARENT TO CHILD APPROACH IMPLEMENTED)

  const handlePrev = () => {
    let currentProducts = 0;
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
    currentProducts = (pageNumber - 1) * prodNbr - prodNbr;
    let paginatedProd = [...prods].splice(currentProducts, prodNbr);
    setPaginated(paginatedProd);
  };

  const handleNext = () => {
    let currentProducts = 0;
    if (pageNumber === prods.length / prodNbr) return;
    setPageNumber(pageNumber + 1);
    currentProducts = (pageNumber + 1) * prodNbr - prodNbr;
    let paginatedProd = [...prods].splice(currentProducts, prodNbr);
    setPaginated(paginatedProd);
  };

  return (
    <PaginationWrapper>
      <CardModalArrow src={leftArrow} onClick={() => handlePrev()} />
      <PaginationNumber>{pageNumber}</PaginationNumber>
      <CardModalArrow src={rightArrow} onClick={() => handleNext()} />
    </PaginationWrapper>
  );
}
