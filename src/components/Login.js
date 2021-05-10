import React from "react";

import styled from "styled-components";
import img from "../disney-plus-login.jpg";

export const Login = () => {
  return (
    <Container>
      <BrandLogo src="/images/logo.svg" alt="disney-logo"></BrandLogo>
      <Content>
        <Heading>The greatest stories, all in one place.</Heading>
        <SubHeading>
          Now including
          <span>
            <img
              src="https://cannonball-cdn.bamgrid.com/assets/originals/DSNY_STAR_LOGO_LIGHT_RGB.png"
              alt="star-logo"
            />
          </span>
        </SubHeading>

        <CTAContainer>
          <PriceTag>
            €8,99 <span>| Month</span>
          </PriceTag>
          <PriceTag>
            €89,90 <span>| Year</span>
          </PriceTag>
          <CTAButton>
            <a>SIGN UP NOW</a>
          </CTAButton>
          <CTAButton>
            <a>SAVE ON 12 MONTHS</a>
          </CTAButton>
        </CTAContainer>
        <ChannelContainer
          src="/images/cta-logo-two.png"
          alt="logo"
        ></ChannelContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  padding: 0 3rem;

  &:before {
    background-image: url("https://cannonball-cdn.bamgrid.com/assets/originals/108839_334165_DIS_STAR_CD_Desktop_ROUTE_A-ALT_DE-AT_st24-1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    content: "";
    position: absolute;
    background-color: #fff !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const BrandLogo = styled.img`
  width: 160px;
  margin-top: 10rem;
`;

const Content = styled.div`
  width: 35%;
`;
const Heading = styled.div`
  font-size: 3rem;
  width: 70%;
  line-height: 1;
  margin-top: 1rem;
  font-weight: bolder;
`;

const SubHeading = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bolder;

  span {
    margin-left: 0.5rem;
    img {
      width: 100px;
    }
  }
`;

const CTAContainer = styled.div`
  display: grid;
  column-gap: 1.25rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  margin-top: 1.5rem;
`;

const PriceTag = styled.div`
  font-weight: bolder;
  font-size: 1.5rem;
  span {
    font-size: 0.75rem;
    color: #f9f9f9;
  }
`;

const CTAButton = styled.button`
  background-color: #0063e5;
  cursor: pointer;
  color: #f9f9f9;
  border: none;
  padding: 1.25rem 1rem;
  border-radius: 0.25rem;
  font-weight: bolder;
  font-size: 0.9rem;
  letter-spacing: 1px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #0483ee;
  }
`;

const ChannelContainer = styled.img`
  margin-top: 15rem;
  object-fit: contain;
  height: 100px;
  width: 550px;
`;
