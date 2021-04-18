import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddService from "./Components/Admin/AddService/AddService";
import Admin from "./Components/Admin/Admin/Admin";
import ManageServices from "./Components/Admin/ManageServices/ManageServices";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";
import BookService from "./Components/Orders/BookService/BookService";
import ServiceList from "./Components/Orders/Orders/ServiceList/ServiceList";
import Review from "./Components/Orders/Review/Review";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addservice">
            <AddService></AddService>
          </Route>
          <Route path="/userReview">
            <Review></Review>
          </Route>
          <PrivateRoute path="/service/:id">
            <BookService></BookService>
          </PrivateRoute>
          <Route path="/servicelist">
            <ServiceList></ServiceList>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/makeadmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/manage">
            <ManageServices></ManageServices>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
