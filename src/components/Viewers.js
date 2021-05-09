import React from "react";

import styled from "styled-components";

export const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="disney-viewer" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="disney-marvel" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="disney-national" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="disney-pixar" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="disney-starwars" />
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 1.875rem;
  display: grid;
  padding: 1.875rem 0 1.625rem;
  gap: 1rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border: 0.1875rem solid rgba(249, 249, 249, 0.1);
  border-radius: 1rem;

  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  /* background-image: linear-gradient(rgb(58, 60, 74), rgb(36, 38, 50)); */
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;
