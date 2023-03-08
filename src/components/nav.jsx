import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

//images
import logo from "../assets/Logo.jpg";
import another from "../assets/another.jpg";

const Nav = () => {
  //configs
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <div className="container">
        <img src={logo} alt="logo" onClick={goHome} className="big" />
        <div className="right">
          <p>In Association With</p>
          <img src={another} alt="logo" className="small" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 110px;
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
    justify-content: space-between;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }

    img.big {
      width: 200px;
    }

    .right {
      p {
        margin: 0 0 10px 0;
      }

      img.small {
        width: 110px;
      }
    }
  }
`;

export default Nav;
