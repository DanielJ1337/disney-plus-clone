// Details page of a certain movie
// the user can see further details like name of the movie, length, description and so on

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";

import styled from "styled-components";

export const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        } else {
          // Reroute to Homepage
        }
      });
  }, []);

  console.log(movie);

  return (
    <Container>
      <Background>
        <img src="" alt="background" />
      </Background>
      <ImageTitle>
        <img src="" alt="planet" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="play-icon" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="play" />
          <span>TRAILER</span>
        </TrailerButton>
        <PlusButton>
          <span>+</span>
        </PlusButton>
        <CommunityButton>
          <img src="/images/group-icon.png" alt="group-icon" />
        </CommunityButton>
      </Controls>

      <SubTitle>
        2001 • 2 Std. • Science-Fiction, Action & Abenteuer
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          obcaecati omnis tenetur, ducimus tempore sed, placeat perspiciatis
          ratione officiis, excepturi accusantium voluptatibus quo. Architecto,
          illum.
        </Description>
      </SubTitle>
    </Container>
  );
};

const Container = styled.div`
  min-height: calc(100vh - 4.375rem);
  padding: 0 calc(3.5vw - 0.3125rem);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 25vh;
  width: 45vw;
  min-height: 10.625rem;
  margin: 2rem 1rem;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  font-size: small;
  color: #000;
  margin-right: 1.375rem;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0 1.5rem;
  letter-spacing: 0.1125rem;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 0.125rem solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const PlusButton = styled.button`
  font-size: 1.875rem;
  border-radius: 50%;
  background: rgb(0, 0, 0, 0.3);
  border: 0.125rem solid rgb(249, 249, 249);
  height: 2.75rem;
  width: 2.75rem;
  color: rgb(249, 249, 249);
  margin-right: 1.375rem;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const CommunityButton = styled(PlusButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubTitle = styled.div`
  font-weight: bolder;
  color: rgb(249, 249, 249);
  font-size: 0.9375rem;
  min-height: 1.25rem;
  margin-top: 1.375rem;
`;

const Description = styled.div`
  font-weight: bolder;
  margin-top: 1rem;
  font-size: 1rem;
  width: 80vw;
  color: rgb(249, 249, 249);
`;
