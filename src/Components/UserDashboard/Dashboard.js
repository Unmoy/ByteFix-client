import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
