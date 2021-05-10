import React from "react";

import styled from "styled-components";

import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Movies = () => {
  const movies = useSelector(selectMovies);

  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt="movie-pic" />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.div`
  margin-top: 1.25rem;
  display: grid;
  gap: 1.5625rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 0.625rem;
  overflow: hidden;
  border: 0.1875rem solid rgb(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0ms;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0 16px 10px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
