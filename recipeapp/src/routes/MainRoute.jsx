import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import AddItem from "../pages/AddItem";

const MainRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/recipe"
        element={
          <PrivateRoute>
            <Recipe />
          </PrivateRoute>
        }
      />
      <Route
        path="/additem"
        element={
          <PrivateRoute>
            <AddItem />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRoute;
