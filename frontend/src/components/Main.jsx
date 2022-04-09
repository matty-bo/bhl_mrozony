import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../sites/dashboard/dashboard";
import { SidebarWrapper } from "../sites/dashboard/dashboard.styles";
import { NavigationBar } from "./navbar";
import { NotificationsView } from "./notifications/NotificationsView";
import { MainListItems } from "./sidebar";

export function Main() {
  return (
    <BrowserRouter>
      <NavigationBar />

      <React.Fragment sx={{display: "flex", flexDirection: "column"}}>
        <SidebarWrapper>
          <MainListItems></MainListItems>
        </SidebarWrapper>

        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/regionData" element={<Dashboard />}></Route>
          <Route exact path="/waterQuality" element={<Dashboard />}></Route>
          <Route exact path="/notifications" element={<NotificationsView />} />
          <Route exact path="/messages" element={<Dashboard />} />
          <Route exact path="/profile-settings" element={<Dashboard />} />
          <Route
            exact
            path="/"
            element={<Navigate replace to="/dashboard" />}
          ></Route>
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}
