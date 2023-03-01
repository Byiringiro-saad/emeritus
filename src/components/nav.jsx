import React from "react";
import styled from "styled-components";

//images
import logo from "../assets/Logo.png";

const Nav = () => {
  return (
    <Container>
      <div className="container">
        <img src={logo} alt="logo" />
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
  }
`;

export default Nav;
