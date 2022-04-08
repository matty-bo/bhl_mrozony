import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../sites/dashboard/dashboard";
import { NavigationBar } from "./navbar";

export function Main() {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/regionData" element={<Dashboard />}></Route>
        <Route exact path="/waterQuality" element={<Dashboard />}></Route>
        <Route
          exact
          path="/"
          element={<Navigate replace to="/dashboard" />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
