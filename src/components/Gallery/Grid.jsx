import React, { useState } from "react";
import prodData from "../../db/db.json";
import Card from "./Card";
import { GridWrapper } from "../../styles/Grid";
import Pagination from "./Pagination";

export default function Grid() {
  const [paginatedPosts, setPaginatedPosts] = useState(prodData.products);
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <>
      <GridWrapper>
        {paginatedPosts.map((item, idx) => (
          <Card
            key={idx}
            name={item.name}
            price={item.price}
            images={item.photos}
            mainPhoto={item.featuredPhoto}
            rate={item.rate}
            desc={item.description}
            reviewsNbr={item.reviewsCount}
          />
        ))}
      </GridWrapper>
      {/**
       * here we passing the original state to be modified in the child
       */}
      <Pagination
        prods={prodData.products}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        prodNbr={3}
        setPaginated={setPaginatedPosts}
      />
    </>
  );
}
