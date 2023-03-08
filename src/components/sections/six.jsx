import React from "react";
import styled from "styled-components";

const Six = () => {
  return (
    <Container>
      <p className="title">Courses offered</p>
      <div className="content">
        <table border={1}>
          <thead>
            <tr>
              <td>Course name</td>
              <td>Duration(Months)</td>
              <td>Introductory price (Lakhs)</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Core Machine Learning ( CML )</td>
              <td>6</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Deep Learning ( DL )</td>
              <td>6</td>
              <td>1.25</td>
            </tr>
            <tr>
              <td>Advanced Machine Learning ( AML )</td>
              <td>6</td>
              <td>1.5</td>
            </tr>
            <tr>
              <td>Production Machine Learning ( PML )</td>
              <td>6</td>
              <td>1.5</td>
            </tr>
            <tr>
              <td>Machine Learning for Professionals ( MLP )</td>
              <td>3</td>
              <td>1.5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 500px;
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
    margin: 0;
  }

  p.title {
    font-size: 2em;
    font-weight: 700;
    color: var(--red);
  }

  .content {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1024px) {
      height: 75%;
      display: block;
      overflow: scroll;
    }

    table {
      width: 100%;
      height: 100%;
      border-collapse: collapse;
      border-radius: 5px;

      @media only screen and (max-width: 1024px) {
        width: auto;
      }

      thead {
        background: var(--red);

        tr {
          td {
            padding: 20px;
            font-weight: 700;
            font-size: 1.2em;
            color: var(--white);
            text-align: center;

            @media only screen and (max-width: 1024px) {
              white-space: nowrap;
            }
          }
        }
      }

      tbody {
        tr {
          td {
            padding: 20px;
            color: var(--grayish);
            text-align: center;
            font-size: 1.2em;

            @media only screen and (max-width: 1024px) {
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
`;

export default Six;
