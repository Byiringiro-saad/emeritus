import React from "react";
import styled from "styled-components";

//images
import logo from "../assets/Logo.png";

const Nav = () => {
  return (
    <Container>
      <div className="container">
        <img src={logo} alt="logo" />
        <p>
          <span>CAI</span>
          <span>Charity school of AI</span>
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: var(--white);

  .container {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }

    img {
      width: 80px;
    }

    p {
      margin: 0 0 0 10px;
      display: flex;
      flex-direction: column;
      align-items: center;

      span:nth-child(1) {
        font-size: 2.1em;
        font-weight: 700;
        color: var(--red);
      }
    }
  }
`;

export default Nav;
