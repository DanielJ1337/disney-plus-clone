import React from "react";
import Slider from "react-slick";

import styled from "styled-components";

// Import CSS files

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="slider-one" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="slider-one" />
      </Wrap>
    </Container>
  );
};

const Container = styled(Slider)`
  margin-top: 1.875rem;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  img {
    width: 100%;
    height: 100%auto;
    object-fit: cover;
  }
`;
