import React from "react";
import styled from "styled-components";

//images
import Certificate from "../../assets/Certificate.png";

const Eight = () => {
  return (
    <Container>
      <p className="title">Sample Program Certificate</p>
      <div className="content">
        <img src={Certificate} alt="certificate" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 30px 0;

  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }

  @media only screen and (max-width: 1024px) {
    height: 550px;
    width: 95%;
  }

  p.title {
    font-size: 2em;
    font-weight: 700;
    color: var(--red);
    line-height: 50px;
  }

  .content {
    width: 80%;
    height: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }
`;

export default Eight;
