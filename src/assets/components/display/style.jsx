import styled from "styled-components";

export const Display = styled.article`
  color: white;
  margin-left: 10%;
  @media (767px < width <= 991px) {
    position: relative;
    width: 50%;
    margin-left: 5%;
    bottom: 50px;
  }

  @media (600px < width <= 767px) {
    position: relative;
    width: 100%;
    margin-left: 5%;
    transform: scale(0.9);
    bottom: 30px;
  }
  @media (width <= 600px) {
    position: relative;
    width: 50%;
    margin-left: 0px;
    bottom: 30px;
    transform: scale(0.8);
  }
  @media (width <= 320px) {
    position: relative;
    transform: scale(0.7);
    right: 15px;
  }
`;
export const Logo = styled.div`
  img {
    margin-top: 25%;

    @media (width <= 999px) {
      margin-top: 50%;
    }
    @media (max-height: 999px) and (max-width: 599px) {
      margin-top: 400px;
    }
    @media (max-height: 750px) and (max-width: 599px) {
      margin-top: 300px;
    }
    @media (max-height: 599px) and (max-width: 599px) {
      margin-top: 50%;
    }
    @media (max-height: 699px) and (min-width: 600px) {
      margin-top: 20%;
    }
    p {
      margin-top: 20px;
      font-size: 1.4em;
    }
  }
`;

export const Details = styled.section`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  img {
    width: 40px;
  }
  img:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  p {
    font-size: 1.5em;
  }
`;

export const ImageInverse = styled.div`
  transform: scale(-1);
`;
