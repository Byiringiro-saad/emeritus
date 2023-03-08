import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

//images
import logo from "../assets/Logo.png";

const Nav = () => {
  //configs
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <div className="container">
        <img src={logo} alt="logo" onClick={goHome} />
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
      width: 150px;
      cursor: pointer;
    }
  }
`;

export default Nav;
