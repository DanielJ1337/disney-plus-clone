import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="home-icon" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="search-icon" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="watchlist-icon" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="original-icon" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="movies-icon" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="series-icon" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://lh3.googleusercontent.com/a-/AOh14GjdNdkpLd3ijOU4Dha4Xklr_zBfFWfCbITPUACU9A=s60-c-rg-br100" />
    </Nav>
  );
};

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 2.25rem;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 1.5625rem;
  align-items: center;
  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    padding: 0 0.75rem;
    cursor: pointer;

    img {
      height: 1.25rem;
    }

    span {
      font-size: 0.8125rem;
      letter-spacing: 1.24px;
      position: relative;

      &:after {
        content: "";
        height: 0.125rem;
        background: #fff;
        position: absolute;
        right: 0;
        bottom: -0.375rem;
        left: 0;
        opacity: 0;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after  {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.img`
  height: 2.25rem;
  cursor: pointer;
`;
