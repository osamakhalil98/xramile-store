import React from "react";
import { GalleryWrapper } from "../../styles/Gallery";
import Grid from "./Grid";
import NavBar from "../Navbar/Navbar";

export default function Gallery() {
  return (
    <>
      <NavBar />
      <GalleryWrapper>
        <Grid />
      </GalleryWrapper>
    </>
  );
}
