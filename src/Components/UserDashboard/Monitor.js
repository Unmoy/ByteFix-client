import React, { useState, useEffect } from "react";
import "./monitor.css";
import Analytics from "./Analytics.jsx";
import Profile from "./Profile";
import { useAuth } from "../contexts/AuthContext";
const Monitor = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { currentUser } = useAuth();
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
    <div className="monitor">
      <div className="grid">
        <div className="row__two">
          <Profile />
        </div>
        {isAdmin && (
          <div className="row__one">
            <Analytics />
          </div>
        )}
      </div>
    </div>
  );
};

export default Monitor;
