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
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="slider-one" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="slider-two" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="slider-three" />
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 1.875rem;
  padding: 1rem;

  ul li button {
    &:before {
      font-size: 0.625rem;
      color: rgb(150, 158, 171);
    }
  }

  /* refers to the dots which represent the active slide in the carousel */
  li.slick-active button:before {
    color: #fff;
  }

  /* shows the other elements of the slider and not just the active one
  so there is a perception a different pages the user can scroll through */
  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 40px -10px,
      rgb(0 0 0 /73%) 0 16px 10px -10px;
    transition-duration: 300ms;
    overflow-x: hidden;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.4);
    }
  }
`;
