import React from "react";

import styled from "styled-components";

import { ImageSlider } from "./ImageSlider";

export const Home = () => {
  return (
    <Container>
      <ImageSlider />
    </Container>
  );
};

const Container = styled.main`
  min-height: calc(100vh - 4.375rem);
  padding: 0 calc(3.5vw + 0.3125rem);
  position: relative;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }
`;
