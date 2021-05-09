import React from "react";

import styled from "styled-components";

import { ImageSlider } from "./ImageSlider";
import { Viewers } from "./Viewers";
import { Movies } from "./Movies";

export const Home = () => {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 0.3125rem);
  background: url("/images/home-background.png") center center / cover no-repeat
    fixed;
  position: relative;
  overflow-x: hidden;
`;
