import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./Components/contexts/AuthContext";
// Components Import
import AddService from "./Components/Admin/AddService/AddService";
import Admin from "./Components/Admin/Admin/Admin";
import ManageServices from "./Components/Admin/ManageServices/ManageServices";
import Home from "./Components/Home/Home/Home";
// import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";
import BookService from "./Components/Orders/BookService/BookService";
import ServiceList from "./Components/Orders/Orders/ServiceList/ServiceList";
import Review from "./Components/Orders/Review/Review";
import ServiceDetailsPage from "./Components/Home/ServiceDetailsPage/ServiceDetailsPage";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import PrivateRoute from "./Components/Authentication/PrivateRoute";
import Dashboard from "./Components/UserDashboard/Dashboard";
import Monitor from "./Components/UserDashboard/Monitor";
import Configure from "./Components/UserDashboard/Configure";
import Help from "./Components/UserDashboard/Help";
import Settings from "./Components/UserDashboard/Settings";
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="addservice" element={<AddService />}></Route>
        <Route
          path="service/:id/"
          element={
            <PrivateRoute>
              <ServiceDetailsPage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="bookservice" element={<BookService />}></Route>
        <Route path="admin" element={<Admin />}></Route>
        {/* <Route path="/makeadmin" element={<MakeAdmin />}></Route> */}
        <Route path="manage" element={<ManageServices />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route
          path="/dashboard*"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<Monitor />} />
          <Route path="monitor" element={<Monitor />} />
          <Route path="servicelist" element={<ServiceList />} />
          <Route path="userReview" element={<Review />} />
          <Route path="configure" element={<Configure />} />
          <Route path="help" element={<Help />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
