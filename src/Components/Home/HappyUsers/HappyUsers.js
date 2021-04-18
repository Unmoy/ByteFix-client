import React from "react";
import HappyUserDetails from "./HappyUserDetails";
import "./HappyUsers.css";
const users = [
  {
    name: "Happy Client",
    number: 3211,
  },
  {
    name: "Finished Projects",
    number: 4260,
  },
  {
    name: "Computer Serviced",
    number: 2722,
  },
  {
    name: "Mobile Serviced",
    number: 1807,
  },
];
const HappyUsers = () => {
  return (
    <section className="bg-back">
      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5">
          {users.map((user) => (
            <HappyUserDetails user={user}></HappyUserDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyUsers;
