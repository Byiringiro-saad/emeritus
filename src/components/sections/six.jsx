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
              <td>Course Id</td>
              <td>Target segment</td>
              <td>Description</td>
              <td>Duration(Months)</td>
              <td>Batch size</td>
              <td>Introductory price (Lakhs)</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ST-A</td>
              <td>Students</td>
              <td>Beginner level</td>
              <td>6</td>
              <td>40</td>
              <td>1</td>
            </tr>
            <tr>
              <td>ST-B</td>
              <td>Students</td>
              <td>Intermediate level</td>
              <td>6</td>
              <td>40</td>
              <td>1.25</td>
            </tr>
            <tr>
              <td>ST-C</td>
              <td>Students</td>
              <td>Advanced level</td>
              <td>6</td>
              <td>40</td>
              <td>1.5</td>
            </tr>
            <tr>
              <td>ST-D</td>
              <td>Students</td>
              <td>AI Application Dev</td>
              <td>6</td>
              <td>40</td>
              <td>1.5</td>
            </tr>
            <tr>
              <td>PR-A</td>
              <td>Professionals</td>
              <td>Application Focused</td>
              <td>3</td>
              <td>20</td>
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

  @media only screen and (max-width: 1200px) {
    width: 90%;
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

    table {
      width: 100%;
      height: 100%;
      border-collapse: collapse;
      border-radius: 5px;

      thead {
        background: var(--red);

        tr {
          td {
            padding: 20px;
            font-weight: 700;
            font-size: 1.2em;
            color: var(--white);
            text-align: center;
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
          }
        }
      }
    }
  }
`;

export default Six;
