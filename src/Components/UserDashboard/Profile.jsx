import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cardStyles } from "./ReusableStyles";
import { faUser, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../contexts/AuthContext";
import { useState, useEffect } from "react";
export default function Profile() {
  const { currentUser } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://byte-fix-server.vercel.app/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: currentUser.user_email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [currentUser.user_email]);
  return (
    <Section>
      <div className="image">
        <FontAwesomeIcon icon={faUser} className="fa_user_icon" />
      </div>
      <div className="title">
        {isAdmin && <h4>Welcome Admin</h4>}
        <h2>{currentUser.user_name}</h2>
        <h5>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Los Angeles, USA
        </h5>
      </div>
      <div className="info">
        <div className="container">
          <h5>Orders</h5>
          <h3>09</h3>
        </div>
        <div className="container">
          <h5>Comments</h5>
          <h3>03</h3>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    .fa_user_icon {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 10rem;
      transition: 0.5s ease-in-out;
      background: grey;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    background: -webkit-linear-gradient(315deg, #6b0f1a 0%, #b91372 74%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    h2,
    h5 {
      letter-spacing: 0.3rem;
      font-weight: 600;
    }
    h5 {
      letter-spacing: 0.2rem;
      color: #b91372;
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    .container {
      text-align: center;
    }
  }
`;
