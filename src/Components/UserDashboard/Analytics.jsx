import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faComments,
  faUsers,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import { cardStyles } from "./ReusableStyles";
export default function Analytics() {
  return (
    <Section>
      <div className="analytic ">
        <div className="content">
          <h5>Revenue</h5>
          <h4>$682.50</h4>
        </div>
        <div className="logo">
          <FontAwesomeIcon icon={faChartBar} className="analytic_logo" />
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <FontAwesomeIcon icon={faSuitcase} className="analytic_logo" />
        </div>
        <div className="content">
          <h5>Earnings</h5>
          <h4>$3000.80</h4>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <FontAwesomeIcon icon={faUsers} className="analytic_logo" />
        </div>
        <div className="content">
          <h5>New Clients</h5>
          <h4 className="text-center">321</h4>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Completed Orders</h5>
          <h4 className="text-center">965</h4>
        </div>
        <div className="logo">
          <FontAwesomeIcon icon={faComments} className="analytic_logo" />
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyles};
    width: 300px;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #1fd1f9;
      background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
      color: #fff;
    }
    .content {
      h5 {
        color: red;
      }
      &:hover {
        color: #fff;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      .analytic_logo {
        font-size: 50px;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;
