import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../sites/dashboard";
import { NavigationBar } from "./navbar";

export function Main() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>

      <Routes>
        <Route
          exact
          path="/dashboard"
          element={<Dashboard></Dashboard>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
