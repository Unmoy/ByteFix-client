import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faList,
  faToolbox,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faTools} />{" "}
            <span className="span">Service</span>
          </Link>
        </li>
        <li>
          <Link to="/servicelist" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faToolbox} />
            <span className="span">Service List</span>
          </Link>
        </li>
        <li>
          <Link to="/userReview" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faComment} />
            <span className="span">Review</span>
          </Link>
        </li>
        {isAdmin && (
          <div>
            <li>
              <Link to="/admin" className="text-white text-decoration-none">
                <FontAwesomeIcon icon={faList} />
                <span className="span">Orders</span>
              </Link>
            </li>
            <li>
              <Link
                to="/addservice"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon icon={faList} />
                <span className="span">Add Service</span>
              </Link>
            </li>
            <li>
              <Link to="/makeadmin" className="text-white text-decoration-none">
                <FontAwesomeIcon icon={faList} />
                <span className="span">Make Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/manage" className="text-white text-decoration-none">
                <FontAwesomeIcon icon={faList} />
                <span className="span">Manage</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
